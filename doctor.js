// Global variables for the currently logged-in doctor's data
let currentDoctor = null;
let doctorSlots = []; // This will store the current doctor's availability slots
let doctorAppointments = []; // This will store the current doctor's appointments
let doctorMonthlyEarnings = []; // This will store the current doctor's monthly earnings

// Function to load doctor profile from localStorage or use defaults
function loadDoctorProfile() {
  const currentUser = JSON.parse(localStorage.getItem("mr_appointment_current_user"));
  if (currentUser && currentUser.role === "doctor") {
    currentDoctor = {
      name: currentUser.name || "Dr. Unknown",
      specialty: currentUser.specialty || "General Practitioner",
      experience: currentUser.experience || 0,
      hospital: currentUser.hospital || "Not specified",
      email: currentUser.email,
      license: currentUser.license
    };
    // Load doctor-specific slots and appointments
    doctorSlots = JSON.parse(localStorage.getItem(`doctor_slots_${currentUser.email}`) || "[]");
    doctorAppointments = JSON.parse(localStorage.getItem(`doctor_appointments_${currentUser.email}`) || "[]");
    doctorMonthlyEarnings = JSON.parse(localStorage.getItem(`doctor_monthly_earnings_${currentUser.email}`) || "[]");

    return currentDoctor;
  }
  // Redirect if not logged in or not a doctor
  alert("Please sign in as a doctor to view this page.");
  window.location.href = "signin.html";
  return null; // Should not be reached due to redirect
}

// Function to save doctor profile to localStorage
function saveDoctorProfile(profile) {
  let currentUser = JSON.parse(localStorage.getItem("mr_appointment_current_user"));
  if (currentUser && currentUser.role === "doctor") {
    // Update the currentDoctor global variable
    currentDoctor = { ...currentDoctor, ...profile };
    // Update the user object in localStorage
    const allUsers = JSON.parse(localStorage.getItem("mr_appointment_users") || "[]");
    const userIndex = allUsers.findIndex(u => u.email === currentUser.email);
    if (userIndex > -1) {
      allUsers[userIndex] = { ...allUsers[userIndex], ...profile };
      localStorage.setItem("mr_appointment_users", JSON.stringify(allUsers));
    }
    localStorage.setItem("mr_appointment_current_user", JSON.stringify(currentDoctor));
    return true;
  }
  return false;
}

// Function to save doctor's slots to localStorage
function saveDoctorSlots() {
  if (currentDoctor && currentDoctor.email) {
    localStorage.setItem(`doctor_slots_${currentDoctor.email}`, JSON.stringify(doctorSlots));
  }
}

// Function to save doctor's appointments to localStorage
function saveDoctorAppointments() {
  if (currentDoctor && currentDoctor.email) {
    localStorage.setItem(`doctor_appointments_${currentDoctor.email}`, JSON.stringify(doctorAppointments));
  }
}

// Function to save doctor's monthly earnings to localStorage
function saveDoctorMonthlyEarnings() {
  if (currentDoctor && currentDoctor.email) {
    localStorage.setItem(`doctor_monthly_earnings_${currentDoctor.email}`, JSON.stringify(doctorMonthlyEarnings));
  }
}

function renderSlots() {
  const ul = document.getElementById("slotsList");
  if (!ul) return;
  ul.innerHTML = "";
  if (doctorSlots.length === 0) {
    ul.innerHTML = "<li style='text-align:center;color:#6c757d;'>No slots added yet.</li>";
    return;
  }
  doctorSlots.forEach(s => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${s.date}</strong> • ${s.start}–${s.end} 
      <br>Duration: ${s.slot} min • Fee: ₹${s.fee}
      <button class="btn remove-slot" style="padding:5px 10px;font-size:12px;margin-left:10px;">Remove</button>
    `;
    li.querySelector(".remove-slot").addEventListener("click", () => {
      const index = doctorSlots.indexOf(s);
      if (index > -1) {
        doctorSlots.splice(index, 1);
        saveDoctorSlots(); // Save after removal
        renderSlots();
      }
    });
    ul.appendChild(li);
  });
}

function renderAppointments() {
  const ul = document.getElementById("appointmentList");
  const totalScheduled = document.getElementById("totalScheduled");
  const completed = document.getElementById("completed");
  const upcoming = document.getElementById("upcoming");
  const todayEarnings = document.getElementById("todayEarnings");
  const weekEarnings = document.getElementById("weekEarnings");

  if (!ul) return;

  ul.innerHTML = "";
  if (doctorAppointments.length === 0) {
    ul.innerHTML = "<li style='text-align:center;color:#6c757d;'>No appointments scheduled for today.</li>";
  } else {
    doctorAppointments.forEach(a => {
      const li = document.createElement("li");
      li.innerHTML = `
        <div>
          <strong>${a.time}</strong> — ${a.patient}
          <br><span style="color:#6c757d;font-size:0.9em;">${a.reason} • ₹${a.fee}</span>
        </div>
        <span class="status-badge ${a.status}">${a.status.charAt(0).toUpperCase() + a.status.slice(1)}</span>
      `;
      ul.appendChild(li);
    });
  }

  if (totalScheduled) totalScheduled.textContent = doctorAppointments.length.toString();
  if (completed) completed.textContent = doctorAppointments.filter(a => a.status === "completed").length.toString();
  if (upcoming) upcoming.textContent = doctorAppointments.filter(a => a.status === "upcoming").length.toString();
  
  if (todayEarnings) {
    const todayTotal = doctorAppointments.reduce((sum, a) => sum + a.fee, 0);
    todayEarnings.textContent = todayTotal.toString();
  }
  
  if (weekEarnings) {
    // For demo, assume weekly earnings are 5x today's earnings
    const weekTotal = doctorAppointments.reduce((sum, a) => sum + a.fee, 0) * 5;
    weekEarnings.textContent = weekTotal.toString();
  }
}

function calculateMonthlyStats() {
  // Get current date for dynamic monthly earnings
  const today = new Date();
  const currentMonthYear = `${today.getFullYear()}-${today.getMonth()}`; // e.g., "2024-7" for August

  // Calculate current month's earnings and appointments from doctorAppointments
  const currentMonthEarnings = doctorAppointments.reduce((sum, a) => sum + a.fee, 0);
  const currentMonthAppointments = doctorAppointments.length;

  // Find if an entry for the current month already exists
  const existingMonthIndex = doctorMonthlyEarnings.findIndex(m => m.monthYear === currentMonthYear);

  if (existingMonthIndex > -1) {
    // Update existing month's data
    doctorMonthlyEarnings[existingMonthIndex].earnings = currentMonthEarnings;
    doctorMonthlyEarnings[existingMonthIndex].appointments = currentMonthAppointments;
  } else {
    // Add new month's data
    doctorMonthlyEarnings.push({
      monthYear: currentMonthYear,
      month: today.toLocaleString('default', { month: 'short' }), // e.g., "Aug"
      earnings: currentMonthEarnings,
      appointments: currentMonthAppointments
    });
  }
  saveDoctorMonthlyEarnings(); // Save updated monthly earnings

  const totalEarnings = doctorMonthlyEarnings.reduce((sum, m) => sum + m.earnings, 0);
  const totalAppointments = doctorMonthlyEarnings.reduce((sum, m) => sum + m.appointments, 0);
  const avgEarnings = doctorMonthlyEarnings.length > 0 ? Math.round(totalEarnings / doctorMonthlyEarnings.length) : 0;
  
  return { totalEarnings, totalAppointments, avgEarnings };
}

// Add CSS for status badges and patient cards
function addDynamicStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .status-badge {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
    }
    .status-badge.completed {
      background: #dcfce7;
      color: #166534;
    }
    .status-badge.upcoming {
      background: #fef3c7;
      color: #92400e;
    }
    .status-badge.cancelled {
      background: #fee2e2;
      color: #991b1b;
    }
    .patient-card {
      display: flex;
      align-items: center;
      gap: 15px;
      background-color: #f8f9fa;
      border: 1px solid #e9ecef;
      padding: 15px;
      margin-bottom: 10px;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
    }
    .patient-card img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      background-color: #3498db; /* For placeholder text */
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5em;
      font-weight: bold;
    }
    .patient-card .patient-info h4 {
      margin: 0;
      color: #2c3e50;
    }
    .patient-card .patient-info p {
      margin: 0;
      font-size: 0.9em;
      color: #6c757d;
    }
  `;
  document.head.appendChild(style);
}

function renderPatientRecords() {
  const patientRecordsList = document.getElementById("patientRecordsList");
  if (!patientRecordsList) return;

  // Use a combination of mock patients and patients from current appointments
  const allPatients = [...new Set(doctorAppointments.map(a => a.patient))].map(pName => {
    const lastAppt = doctorAppointments.filter(a => a.patient === pName).sort((a, b) => {
      // Simple date/time comparison for demo, ideally use actual timestamps
      const timeA = new Date(`2000/01/01 ${a.time}`); // Dummy date for time comparison
      const timeB = new Date(`2000/01/01 ${b.time}`);
      return timeB - timeA;
    })[0];
    return {
      name: pName,
      lastVisit: lastAppt ? `Today, ${lastAppt.time}` : "N/A", // Simplistic for demo
      avatarText: pName.charAt(0).toUpperCase()
    };
  });

  // Add some static mock patients if the list is too short
  if (allPatients.length < 3) {
    mockPatients.forEach(mp => {
      if (!allPatients.some(ap => ap.name === mp.name)) {
        allPatients.push(mp);
      }
    });
  }

  patientRecordsList.innerHTML = "";
  allPatients.forEach(patient => {
    const patientCard = document.createElement("div");
    patientCard.className = "patient-card";
    patientCard.innerHTML = `
      <img src="https://placehold.co/50x50/3498db/ffffff?text=${patient.avatarText}&font=oswald" alt="${patient.name} profile" />
      <div class="patient-info">
        <h4>${patient.name}</h4>
        <p>Last visit: ${patient.lastVisit}</p>
      </div>
    `;
    patientRecordsList.appendChild(patientCard);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  // Load doctor profile first
  const doctorProfile = loadDoctorProfile();
  if (!doctorProfile) return; // If loadDoctorProfile redirects, stop execution

  const doctorProfileName = document.getElementById("doctorProfileName");
  const doctorProfileSpecialty = document.getElementById("doctorProfileSpecialty");
  const editDoctorName = document.getElementById("editDoctorName");
  const editDoctorSpecialty = document.getElementById("editDoctorSpecialty");
  const editDoctorExperience = document.getElementById("editDoctorExperience");
  const editDoctorHospital = document.getElementById("editDoctorHospital");
  const doctorProfileForm = document.getElementById("doctorProfileForm");
  const logoutBtn = document.getElementById("logoutBtn");

  // Set initial profile values
  if (doctorProfileName) doctorProfileName.textContent = doctorProfile.name;
  if (doctorProfileSpecialty) doctorProfileSpecialty.textContent = `${doctorProfile.specialty} • ${doctorProfile.experience} Years Experience`;
  if (editDoctorName) editDoctorName.value = doctorProfile.name;
  if (editDoctorSpecialty) editDoctorSpecialty.value = doctorProfile.specialty;
  if (editDoctorExperience) editDoctorExperience.value = doctorProfile.experience;
  if (editDoctorHospital) editDoctorHospital.value = doctorProfile.hospital;

  // Handle profile form submission
  if (doctorProfileForm) {
    doctorProfileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const updatedProfile = {
        name: editDoctorName.value,
        specialty: editDoctorSpecialty.value,
        experience: parseInt(editDoctorExperience.value, 10),
        hospital: editDoctorHospital.value
      };

      if (saveDoctorProfile(updatedProfile)) {
        alert("✅ Profile updated successfully!");
        // Update displayed profile info immediately
        if (doctorProfileName) doctorProfileName.textContent = updatedProfile.name;
        if (doctorProfileSpecialty) doctorProfileSpecialty.textContent = `${updatedProfile.specialty} • ${updatedProfile.experience} Years Experience`;
      } else {
        alert("❌ Failed to update profile. Please ensure you are logged in as a doctor.");
      }
    });
  }

  // Handle logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.removeItem("mr_appointment_current_user");
      window.location.href = "index.html";
    });
  }

  const form = document.getElementById("availabilityForm");
  if (!form) return;

  const patientNames = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Henry"];
  const reasons = ["Follow-up", "New Consultation", "Check-up", "Prescription Refill", "Acute Symptom", "Routine Exam"];

  // Add dynamic styles
  addDynamicStyles();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("availDate").value;
    const start = document.getElementById("availStart").value;
    const end = document.getElementById("availEnd").value;
    const slot = parseInt(document.getElementById("availSlot").value, 10);
    const fee = parseInt(document.getElementById("docFee").value, 10);

    if (!date || !start || !end || isNaN(slot) || isNaN(fee)) {
      alert("Please fill all fields correctly.");
      return;
    }

    doctorSlots.push({ date, start, end, slot, fee });
    saveDoctorSlots(); // Save slots after adding
    renderSlots();

    // Demo: generate a mock appointment whenever slots added
    const randomPatient = patientNames[Math.floor(Math.random() * patientNames.length)];
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];

    doctorAppointments.push({
      time: `${start}`, // Use the start time of the added slot
      patient: randomPatient,
      reason: randomReason,
      fee,
      status: "upcoming"
    });
    saveDoctorAppointments(); // Save appointments after adding
    renderAppointments(); // Re-render appointments to show new one
    renderPatientRecords(); // Re-render patient records to include new patient

    form.reset();
    document.getElementById("availSlot").value = 30;
    document.getElementById("docFee").value = 800;
  });

  // Initialize appointment stats and patient records
  calculateMonthlyStats(); // Call to ensure monthlyEarnings is populated and saved
  renderSlots();
  renderAppointments();
  renderPatientRecords();
});