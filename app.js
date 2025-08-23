/* =========================
   Enhanced Hospital and Doctor Data
   ========================= */
const mockHospitals = [
  {
    id: 1,
    name: "City General Hospital",
    type: "Govt",
    city: "delhi",
    image: "https://www.vecteezy.com/free-vector/hospital",
    rating: 4.5,
    reviews: 234,
    distanceKm: 2.8,
    address: "123 Main Street, Connaught Place",
    phone: "+91 11 2345 6789",
    doctors: [
      { id: 101, name: "Dr. Rajesh Verma", specialty: "cardiology", fee: 800, nextInMin: 15, experience: 12, rating: 4.8 },
      { id: 102, name: "Dr. Kavita Rao", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 },
      { id: 103, name: "Dr. Amit Patel", specialty: "orthopedics", fee: 1200, nextInMin: 40, experience: 15, rating: 4.9 },
      { id: 104, name: "Dr. Sunil Kumar", specialty: "dermatology", fee: 1200, nextInMin: 30, experience: 10, rating: 4.7 },
      { id: 105, name: "Dr. Arvind Menon", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 106, name: "Dr. Mona Dubey", specialty: "gynecology", fee: 1200, nextInMin: 35, experience: 9, rating: 4.6 },
      { id: 107, name: "Dr. Lokesh Verma", specialty: "pediatrics", fee: 900, nextInMin: 15, experience: 7, rating: 4.5 },
      { id: 108, name: "Dr. Nishani Mehta", specialty: "ent", fee: 1100, nextInMin: 25, experience: 11, rating: 4.7 },
      { id: 109, name: "Dr. Tara Joshi", specialty: "psychiatry", fee: 1300, nextInMin: 30, experience: 10, rating: 4.6 },
      { id: 110, name: "Dr. Suresh Reddy", specialty: "neurology", fee: 2200, nextInMin: 45, experience: 16, rating: 4.9 }
    ]
  },
  {
    id: 2,
    name: "Green Valley Multi-speciality",
    type: "Private",
    city: "mumbai",
    image: "https://www.vecteezy.com/free-vector/hospital",
    rating: 4.7,
    reviews: 156,
    distanceKm: 4.2,
    address: "456 Marine Drive, Colaba",
    phone: "+91 22 9876 5432",
    doctors: [
      { id: 201, name: "Dr. Sunita Nair", specialty: "dermatology", fee: 1500, nextInMin: 30, experience: 10, rating: 4.7 },
      { id: 202, name: "Dr. Rohan Shah", specialty: "orthopedics", fee: 1800, nextInMin: 20, experience: 12, rating: 4.8 },
      { id: 203, name: "Dr. Meera Desai", specialty: "gynecology", fee: 1200, nextInMin: 35, experience: 9, rating: 4.6 },
      { id: 204, name: "Dr. Ram Singh", specialty: "cardiology", fee: 800, nextInMin: 15, experience: 12, rating: 4.8 },
      { id: 205, name: "Dr. Koyal Mishra", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 },
      { id: 206, name: "Dr. Lalit Gupta", specialty: "pediatrics", fee: 900, nextInMin: 15, experience: 7, rating: 4.5 },
      { id: 207, name: "Dr. Anjali Mehta", specialty: "ent", fee: 1100, nextInMin: 25, experience: 11, rating: 4.7 },
      { id: 208, name: "Dr. Deepak Malhotra", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 209, name: "Dr. Shreya Kulkarni", specialty: "psychiatry", fee: 1300, nextInMin: 30, experience: 10, rating: 4.6 },
      { id: 210, name: "Dr. Vikram Shetty", specialty: "neurology", fee: 2200, nextInMin: 45, experience: 16, rating: 4.9 }
    ]
  },
  {
    id: 3,
    name: "Metro Care Clinic",
    type: "Private",
    city: "delhi",
    image: "https://placehold.co/600x400/e74c3c/ffffff?text=Metro+Care+Clinic&font=montserrat",
    rating: 4.3,
    reviews: 89,
    distanceKm: 1.5,
    address: "789 MG Road, Karol Bagh",
    phone: "+91 11 8765 4321",
    doctors: [
      { id: 301, name: "Dr. Priya Singh", specialty: "cardiology", fee: 2000, nextInMin: 10, experience: 14, rating: 4.9 },
      { id: 302, name: "Dr. Ramesh Chawla", specialty: "pediatrics", fee: 900, nextInMin: 15, experience: 7, rating: 4.5 },
      { id: 303, name: "Dr. Neelam Kapoor", specialty: "ent", fee: 1100, nextInMin: 25, experience: 11, rating: 4.7 },
      { id: 304, name: "Dr. Ashok Bansal", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 },
      { id: 305, name: "Dr. Anita Sharma", specialty: "orthopedics", fee: 1200, nextInMin: 40, experience: 15, rating: 4.9 },
      { id: 306, name: "Dr. Sameer Mathur", specialty: "dermatology", fee: 1200, nextInMin: 30, experience: 10, rating: 4.7 },
      { id: 307, name: "Dr. Poonam Rathi", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 308, name: "Dr. Nidhi Sinha", specialty: "gynecology", fee: 1200, nextInMin: 35, experience: 9, rating: 4.6 },
      { id: 309, name: "Dr. Arjun Chopra", specialty: "psychiatry", fee: 1300, nextInMin: 30, experience: 10, rating: 4.6 },
      { id: 310, name: "Dr. Vivek Raina", specialty: "neurology", fee: 2200, nextInMin: 45, experience: 16, rating: 4.9 }
    ]
  },
  {
    id: 4,
    name: "National Health Center",
    type: "Govt",
    city: "bengaluru",
    image: "https://placehold.co/600x400/9b59b6/ffffff?text=National+Health+Center&font=montserrat",
    rating: 4.6,
    reviews: 312,
    distanceKm: 3.7,
    address: "321 Brigade Road, MG Road",
    phone: "+91 80 2345 6789",
    doctors: [
      { id: 401, name: "Dr. Sunita Nair", specialty: "dermatology", fee: 1500, nextInMin: 30, experience: 10, rating: 4.7 },
      { id: 402, name: "Dr. Rohan Shah", specialty: "orthopedics", fee: 1800, nextInMin: 20, experience: 12, rating: 4.8 },
      { id: 403, name: "Dr. Meera Desai", specialty: "gynecology", fee: 1200, nextInMin: 35, experience: 9, rating: 4.6 },
      { id: 404, name: "Dr. Ram Prakash", specialty: "cardiology", fee: 800, nextInMin: 15, experience: 12, rating: 4.8 },
      { id: 405, name: "Dr. Koyal Mishra", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 },
      { id: 406, name: "Dr. Lalit Gupta", specialty: "pediatrics", fee: 900, nextInMin: 15, experience: 7, rating: 4.5 },
      { id: 407, name: "Dr. Mohan Iyer", specialty: "ent", fee: 600, nextInMin: 20, experience: 13, rating: 4.8 },
      { id: 408, name: "Dr. Shankar Iyer", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 409, name: "Dr. Tara Rao", specialty: "psychiatry", fee: 1300, nextInMin: 30, experience: 10, rating: 4.6 },
      { id: 410, name: "Dr. Suresh Kumar", specialty: "neurology", fee: 2200, nextInMin: 45, experience: 16, rating: 4.9 }
    ]
  },
  {
    id: 5,
    name: "Apollo Speciality Hospital",
    type: "Private",
    city: "chennai",
    image: "https://www.vecteezy.com/free-vector/hospital",
    rating: 4.8,
    reviews: 478,
    distanceKm: 5.1,
    address: "654 Greams Road, Thousand Lights",
    phone: "+91 44 9876 5432",
    doctors: [
      { id: 501, name: "Dr. Vijayalakshmi", specialty: "cardiology", fee: 2500, nextInMin: 25, experience: 18, rating: 4.9 },
      { id: 502, name: "Dr. Nalini Rajan", specialty: "pediatrics", fee: 1500, nextInMin: 15, experience: 12, rating: 4.7 },
      { id: 503, name: "Dr. Seema Krishnan", specialty: "gynecology", fee: 1400, nextInMin: 20, experience: 10, rating: 4.6 },
      { id: 504, name: "Dr. Arvind Swamy", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 505, name: "Dr. Mohan Iyer", specialty: "ent", fee: 600, nextInMin: 20, experience: 13, rating: 4.8 },
      { id: 506, name: "Dr. Kavita Rao", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 },
      { id: 507, name: "Dr. Suresh Kumar", specialty: "neurology", fee: 2200, nextInMin: 45, experience: 16, rating: 4.9 }
    ]
  },
  {
    id: 6,
    name: "Fortis Healthcare",
    type: "Private",
    city: "mumbai",
    image: "https://www.vecteezy.com/free-vector/hospital",
    rating: 4.9,
    reviews: 345,
    distanceKm: 6.3,
    address: "987 Linking Road, Bandra West",
    phone: "+91 22 3456 7890",
    doctors: [
      { id: 601, name: "Dr. Sameer Khan", specialty: "neurology", fee: 2800, nextInMin: 35, experience: 14, rating: 4.9 },
      { id: 602, name: "Dr. Neha Sharma", specialty: "dermatology", fee: 1900, nextInMin: 20, experience: 9, rating: 4.7 },
      { id: 603, name: "Dr. Ravi Malhotra", specialty: "orthopedics", fee: 2100, nextInMin: 30, experience: 13, rating: 4.8 },
      { id: 604, name: "Dr. Meera Desai", specialty: "gynecology", fee: 1200, nextInMin: 35, experience: 9, rating: 4.6 },
      { id: 605, name: "Dr. Vijayalakshmi", specialty: "cardiology", fee: 2500, nextInMin: 25, experience: 18, rating: 4.9 },
      { id: 606, name: "Dr. Arvind Menon", specialty: "oncology", fee: 3000, nextInMin: 40, experience: 15, rating: 4.8 },
      { id: 607, name: "Dr. Nalini Rajan", specialty: "pediatrics", fee: 1500, nextInMin: 15, experience: 12, rating: 4.7 },
      { id: 608, name: "Dr. Tara Rao", specialty: "psychiatry", fee: 1300, nextInMin: 30, experience: 10, rating: 4.6 },
      { id: 609, name: "Dr. Mohan Iyer", specialty: "ent", fee: 600, nextInMin: 20, experience: 13, rating: 4.8 },
      { id: 610, name: "Dr. Kavita Rao", specialty: "general", fee: 500, nextInMin: 25, experience: 8, rating: 4.6 }
    ]
  },
  {
  id: 7,
  name: "Kolkata Medical Research Institute",
  type: "Private",
  city: "kolkata",
  image: "https://placehold.co/600x400/1abc9c/ffffff?text=Kolkata+MRI&font=montserrat",
  rating: 4.6,
  reviews: 280,
  distanceKm: 3.9,
  address: "45 Park Street, Taltala",
  phone: "+91 33 2345 6789",
  doctors: [
    { id: 701, name: "Dr. Subhas Chatterjee", specialty: "cardiology", fee: 2000, nextInMin: 20, experience: 15, rating: 4.8 },
    { id: 702, name: "Dr. Aparna Ghosh", specialty: "gynecology", fee: 1500, nextInMin: 30, experience: 12, rating: 4.7 },
    { id: 703, name: "Dr. Soumitra Dey", specialty: "orthopedics", fee: 1800, nextInMin: 25, experience: 10, rating: 4.6 },
    { id: 704, name: "Dr. Anindita Sen", specialty: "dermatology", fee: 1200, nextInMin: 15, experience: 9, rating: 4.5 },
    { id: 705, name: "Dr. Pradip Banerjee", specialty: "neurology", fee: 2500, nextInMin: 40, experience: 18, rating: 4.9 },
    { id: 706, name: "Dr. Kaushik Mitra", specialty: "general", fee: 600, nextInMin: 20, experience: 7, rating: 4.4 },
    { id: 707, name: "Dr. Rupa Basu", specialty: "psychiatry", fee: 1400, nextInMin: 35, experience: 11, rating: 4.6 },
    { id: 708, name: "Dr. Arindam Saha", specialty: "oncology", fee: 2800, nextInMin: 30, experience: 14, rating: 4.7 },
    { id: 709, name: "Dr. Nabanita Roy", specialty: "pediatrics", fee: 1100, nextInMin: 20, experience: 9, rating: 4.5 },
    { id: 710, name: "Dr. Debashish Ghosh", specialty: "ent", fee: 1000, nextInMin: 25, experience: 10, rating: 4.6 }
  ]
},
{
  id: 8,
  name: "Hyderabad Global Hospital",
  type: "Private",
  city: "hyderabad",
  image: "https://placehold.co/600x400/2980b9/ffffff?text=Hyderabad+Global&font=montserrat",
  rating: 4.7,
  reviews: 310,
  distanceKm: 4.5,
  address: "67 Banjara Hills Road, Hyderabad",
  phone: "+91 40 3456 7890",
  doctors: [
    { id: 801, name: "Dr. Anil Reddy", specialty: "cardiology", fee: 2200, nextInMin: 20, experience: 14, rating: 4.8 },
    { id: 802, name: "Dr. Shalini Reddy", specialty: "gynecology", fee: 1600, nextInMin: 25, experience: 11, rating: 4.7 },
    { id: 803, name: "Dr. Vivek Raju", specialty: "orthopedics", fee: 2000, nextInMin: 35, experience: 12, rating: 4.8 },
    { id: 804, name: "Dr. Swapna Rao", specialty: "dermatology", fee: 1400, nextInMin: 30, experience: 10, rating: 4.6 },
    { id: 805, name: "Dr. Kiran Kumar", specialty: "neurology", fee: 2600, nextInMin: 40, experience: 17, rating: 4.9 },
    { id: 806, name: "Dr. Harish Goud", specialty: "general", fee: 700, nextInMin: 20, experience: 8, rating: 4.5 },
    { id: 807, name: "Dr. Lavanya Iyer", specialty: "psychiatry", fee: 1500, nextInMin: 30, experience: 9, rating: 4.6 },
    { id: 808, name: "Dr. Manoj Varma", specialty: "oncology", fee: 3200, nextInMin: 45, experience: 16, rating: 4.8 },
    { id: 809, name: "Dr. Praveen Ch", specialty: "pediatrics", fee: 1000, nextInMin: 15, experience: 7, rating: 4.4 },
    { id: 810, name: "Dr. Sneha Reddy", specialty: "ent", fee: 950, nextInMin: 25, experience: 10, rating: 4.6 }
    ]
  }
];

function byEarliestAvailability(matches) {
  const flattened = [];
  matches.forEach(h => {
    h.doctors.forEach(d => {
      flattened.push({
        hospital: h,
        doctor: d,
        combinedScore: (d.nextInMin * 0.4) + (h.distanceKm * 0.3) + (d.fee * -0.001) + (d.rating * 0.2)
      });
    });
  });
  
  flattened.sort((a, b) => a.combinedScore - b.combinedScore);
  return flattened.map(item => ({
    hospital: item.hospital,
    doctor: item.doctor
  }));
}

function renderHospitalCards(flatList) {
  const container = document.getElementById("hospitalList");
  if (!container) return;
  container.innerHTML = "";

  if (flatList.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <img src="https://placehold.co/200x200/95a5a6/ffffff?text=😕&font=oswald" alt="No results found icon - sad face with magnifying glass" onerror="this.style.display='none'" />
        <h3>No matching hospitals found</h3>
        <p>Try selecting a different specialty or city</p>
      </div>
    `;
    return;
  }

  flatList.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "hospital-card";
    card.innerHTML = `
      <div class="hospital-image">
        <img src="${item.hospital.image}" alt="${item.hospital.name} - ${item.hospital.type} hospital in ${item.hospital.city}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/95a5a6/ffffff?text=🏥&font=montserrat'" />
        <div class="hospital-badge">#${index + 1} Recommendation</div>
      </div>
      
      <div class="hospital-content">
        <div class="hospital-header">
          <h3>${item.hospital.name}
            <span class="badge ${item.hospital.type.toLowerCase()}">${item.hospital.type}</span>
          </h3>
          <div class="hospital-rating">
            ⭐ ${item.hospital.rating} (${item.hospital.reviews} reviews)
          </div>
        </div>

        <div class="doctor-info">
          <div class="doctor-avatar">
            <img src="https://placehold.co/60x60/3498db/ffffff?text=👨‍⚕️&font=oswald" alt="Doctor ${item.doctor.name} profile picture" onerror="this.style.display='none'" />
          </div>
          <div class="doctor-details">
            <h4>${item.doctor.name}</h4>
            <p>${item.doctor.specialty.toUpperCase()} • ${item.doctor.experience} years exp • ⭐ ${item.doctor.rating}</p>
          </div>
        </div>

        <div class="hospital-meta">
          <div class="meta-item">
            <span class="icon">⏰</span>
            <span>Next available: ${item.doctor.nextInMin} min</span>
          </div>
          <div class="meta-item">
            <span class="icon">📍</span>
            <span>${item.hospital.distanceKm.toFixed(1)} km away</span>
          </div>
          <div class="meta-item">
            <span class="icon">💰</span>
            <span>₹${item.doctor.fee} consultation fee</span>
          </div>
        </div>

        <div class="hospital-contact">
          <p>📍 ${item.hospital.address}</p>
          <p>📞 ${item.hospital.phone}</p>
        </div>

        <div class="hcard-actions">
          <button class="btn book-btn">Book Appointment</button>
          <button class="btn view-btn">View Profile</button>
        </div>
      </div>
    `;
    
    card.querySelector(".book-btn").addEventListener("click", () => {
      alert(`✅ Appointment booked!\n\nHospital: ${item.hospital.name}\nDoctor: ${item.doctor.name}\nSpecialty: ${item.doctor.specialty}\nTime: ~${item.doctor.nextInMin} min\nFee: ₹${item.doctor.fee}`);
    });

    card.querySelector(".view-btn").addEventListener("click", () => {
      alert(`👨‍⚕️ Doctor Profile\n\nName: ${item.doctor.name}\nSpecialty: ${item.doctor.specialty}\nExperience: ${item.doctor.experience} years\nRating: ⭐ ${item.doctor.rating}\nFee: ₹${item.doctor.fee}\n\nHospital: ${item.hospital.name}`);
    });

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");
  const bookingStep = document.getElementById("bookingStep");
  const hospitalSection = document.getElementById("hospitalSection");

  if (nextBtn && bookingStep && hospitalSection) {
    nextBtn.addEventListener("click", () => {
      const spec = (document.getElementById("specialty").value || "").toLowerCase();
      const city = (document.getElementById("city").value || "").toLowerCase();

      if (!spec || !city) {
        alert("⚠️ Please select both Specialty and City.");
        return;
      }

      // Filter by city and specialty
      const candidateHospitals = mockHospitals
        .filter(h => h.city === city)
        .map(h => ({
          ...h,
          doctors: h.doctors.filter(d => d.specialty === spec)
        }))
        .filter(h => h.doctors.length > 0);

      const ranked = byEarliestAvailability(candidateHospitals);

      bookingStep.style.display = "none";
      hospitalSection.style.display = "block";
      renderHospitalCards(ranked);
    });
  }
});


