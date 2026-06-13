function addMedicine() {
    const medicine = document.getElementById("medicineName").value;
    const time = document.getElementById("medicineTime").value;

    if (medicine === "" || time === "") {
        alert("Please enter medicine name and time.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = medicine + " - " + time;
    document.getElementById("medicineList").appendChild(li);

    alert("✅ Medicine added successfully!");

    updateDashboard();

    localStorage.setItem(
        "medicineData",
        document.getElementById("medicineList").innerHTML
    );

     // Selected time ke hisaab se reminder
const now = new Date();

const selectedTime = time.split(":");
const reminderTime = new Date();

reminderTime.setHours(parseInt(selectedTime[0]));
reminderTime.setMinutes(parseInt(selectedTime[1]));
reminderTime.setSeconds(0);

const delay = reminderTime.getTime() - now.getTime();

if (delay > 0) {
    setTimeout(function () {
        alert("⏰ Reminder: Time to take " + medicine + "!");
    }, delay);
}
    

    document.getElementById("medicineName").value = "";
    document.getElementById("medicineTime").value = "";
}

function updateDashboard() {
    // Total medicines count
    const medicineCount =
        document.getElementById("medicineList").children.length;
    document.getElementById("medicineCount").innerText = medicineCount;

    // Water glasses count
    if (document.getElementById("waterDashboard")) {
        document.getElementById("waterDashboard").innerText = water;
    }
}

function saveAppointment() {
    const date = document.getElementById("appointmentDate").value;
    const doctor = document.getElementById("doctorName").value;

    if (date === "" || doctor === "") {
        alert("Please enter appointment details.");
        return;
    }

    document.getElementById("appointmentResult").textContent =
        `Appointment with Dr. ${doctor} saved for ${date}.`;
}

function checkSymptom() {
    const symptom = document.getElementById("symptom").value.toLowerCase();
    let message = "For proper diagnosis, please consult a qualified healthcare professional.";

    if (symptom.includes("fever")) {
        message = "General advice: Stay hydrated and monitor your temperature. Consult a doctor if it persists.";
    } else if (symptom.includes("cough")) {
        message = "General advice: Drink fluids and rest. Seek medical advice if symptoms continue or worsen.";
    } else if (symptom.includes("headache")) {
        message = "General advice: Rest, stay hydrated, and seek medical care if severe or persistent.";
    }

    document.getElementById("symptomResult").textContent = message;
}

// Family Medicine Tracker
function addFamilyMedicine() {
    const name = document.getElementById("familyName").value;
    const medicine = document.getElementById("familyMedicine").value;

    if (name === "" || medicine === "") {
        alert("Please fill both fields.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = `${name} → ${medicine}`;
    document.getElementById("familyList").appendChild(li);

    document.getElementById("familyName").value = "";
    document.getElementById("familyMedicine").value = "";
}

// Emergency Contact
function saveEmergency() {
    const name = document.getElementById("emergencyName").value;
    const phone = document.getElementById("emergencyPhone").value;

    document.getElementById("emergencyResult").textContent =
        `Emergency Contact Saved: ${name} (${phone})`;
}

// Water Tracker
let water = 0;

function drinkWater() {
    water++;
    document.getElementById("waterCount").textContent =
        `Glasses Today: ${water}`;
        updateDashboard();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function updateDashboard() {
    const total = document.getElementById("medicineList").children.length;
    document.getElementById("medicineCount").innerText = total;

    const waterElement = document.getElementById("waterDashboard");
    if (waterElement) {
        waterElement.innerText = water;
    }
}
window.onload = function () {
    const saved = localStorage.getItem("medicineData");
    if (saved) {
        document.getElementById("medicineList").innerHTML = saved;
        updateDashboard();
    }
};
function checkSymptom() {
  let input = document.getElementById("symptomInput").value.toLowerCase();
  let output = "";

  if (input.includes("fever") || input.includes("temperature")) {
    output = "Possible: Viral Fever. Take rest, drink fluids, and monitor temperature.";
  }
  else if (input.includes("headache")) {
    output = "Possible: Stress or dehydration. Take rest and drink water.";
  }
  else if (input.includes("cough")) {
    output = "Possible: Cold or throat infection. Avoid cold drinks.";
  }
  else {
    output = "General advice: Consult a doctor for proper diagnosis.";
  }

  document.getElementById("symptomResult").innerText = output;
}