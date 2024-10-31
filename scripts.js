// Contact Form Validation
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    // Basic validation
    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
    document.getElementById("contactForm").reset();
}

// Image Slideshow
const images = ["project1.jpeg", "project2.jpg", "project3.jpg"];
let currentImageIndex = 0;

function showImage(index) {
    const slideshowImage = document.getElementById("slideshowImage");
    slideshowImage.src = images[index];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Skills Toggle
let showingTechnicalSkills = true;

function toggleSkills() {
    const skillsContent = document.getElementById("skillsContent");
    const toggleBtn = document.querySelector(".toggle-btn");

    if (showingTechnicalSkills) {
        skillsContent.textContent = "Teamwork, Communication, Problem-solving, Adaptability";
        toggleBtn.textContent = "Technical Skills";
    } else {
        skillsContent.textContent = "HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js";
        toggleBtn.textContent = "Soft Skills";
    }
    showingTechnicalSkills = !showingTechnicalSkills;
}
