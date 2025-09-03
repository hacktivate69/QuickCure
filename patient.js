// Function to save a booked appointment for the current patient
function savePatientAppointment(appointmentDetails) {
  const currentUser  = JSON.parse(localStorage.getItem("mr_appointment_current_user"));
  if (!currentUser  || currentUser .role !== "patient") {
    alert("Please sign in as a patient to book an appointment.");
    return;
  }

  const key = `patient_appointments_${currentUser .email}`;
  const appointments = JSON.parse(localStorage.getItem(key) || "[]");
  appointments.push(appointmentDetails);
  localStorage.setItem(key, JSON.stringify(appointments));
}

// Example function to book an appointment (call this on booking confirmation)
function bookAppointment(doctorName, specialty, hospitalName, time, fee) {
  const appointmentDetails = {
    doctorName,
    specialty,
    hospitalName,
    time,
    fee
  };

  savePatientAppointment(appointmentDetails);
  alert("Appointment booked successfully!");

  // Optionally redirect to profile page or update UI accordingly
  // window.location.href = "patient_profile.html";
}

// Example usage:
// bookAppointment("Dr. Rajesh Sharma", "Cardiology", "City General Hospital", "2024-08-15 10:00 AM", 800);