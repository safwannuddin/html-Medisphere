// Script to handle modal opening and closing
document.addEventListener('DOMContentLoaded', function () {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    // Open modal when link is clicked
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const modalId = this.getAttribute('href');
            document.querySelector(modalId).style.display = 'block';
        });
    });

    // Close modal when close button is clicked
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            modals.forEach(modal => modal.style.display = 'none');
        });
    });

    // Close modal when clicking outside the modal content
    window.onclick = function (event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    };
});
// Get the modals and buttons
var healthEduModal = document.getElementById("healthEduModal");
var heartDiseaseModal = document.getElementById("heartDiseaseModal");
var bloodPressureModal = document.getElementById("bloodPressureModal");
var diabetesModal = document.getElementById("diabetesModal");
var obesityModal = document.getElementById("obesityModal");

var healthEduBtn = document.getElementById("healthEduBtn");
var heartDiseaseBtn = document.getElementById("heartDiseaseBtn");
var bloodPressureBtn = document.getElementById("bloodPressureBtn");
var diabetesBtn = document.getElementById("diabetesBtn");
var obesityBtn = document.getElementById("obesityBtn");

var span = document.getElementsByClassName("close");

// Show Health Education Modal
healthEduBtn.onclick = function() {
  healthEduModal.style.display = "block";
};

// Show respective modals when clicked
heartDiseaseBtn.onclick = function() {
  healthEduModal.style.display = "none";
  heartDiseaseModal.style.display = "block";
};

bloodPressureBtn.onclick = function() {
  healthEduModal.style.display = "none";
  bloodPressureModal.style.display = "block";
};

diabetesBtn.onclick = function() {
  healthEduModal.style.display = "none";
  diabetesModal.style.display = "block";
};

obesityBtn.onclick = function() {
  healthEduModal.style.display = "none";
  obesityModal.style.display = "block";
};

// Close the modal
for (var i = 0; i < span.length; i++) {
  span[i].onclick = function() {
    healthEduModal.style.display = "none";
    heartDiseaseModal.style.display = "none";
    bloodPressureModal.style.display = "none";
    diabetesModal.style.display = "none";
    obesityModal.style.display = "none";
  };
}

// Close the modal if user clicks outside of it
window.onclick = function(event) {
  if (event.target == healthEduModal || event.target == heartDiseaseModal ||
      event.target == bloodPressureModal || event.target == diabetesModal || event.target == obesityModal) {
    healthEduModal.style.display = "none";
    heartDiseaseModal.style.display = "none";
    bloodPressureModal.style.display = "none";
    diabetesModal.style.display = "none";
    obesityModal.style.display = "none";
  }
};
var aboutUsModal = document.getElementById("aboutUsModal");
var aboutUsBtn = document.getElementById("aboutUsBtn");

// Open the About Us Modal
aboutUsBtn.onclick = function() {
  aboutUsModal.style.display = "block";
};
