/* ------------------ Navbar / Menu Toggle ------------------ */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = "&times;";
    } else {
        menuToggle.innerHTML = "&#9776;";
    }
});

/* ------------------ Project Section ------------------ */
const projectData = [
    {
        title: "A-BAJA 2024 & 2025 (SAE INDIA)",
        image: "https://upload.wikimedia.org/wikipedia/en/7/76/BAJA_SAE_India_Logo.png",
        description:
            "Designed an autonomous perception and control pipeline using YOLOv8 integrated with Jetson Nano, Raspberry Pi, and Arduino. Programmed and validated control logic for Adaptive Cruise Control, AEB, Lane Keep Assist, and Traffic Sign Detection using CarMaker simulation before physical deployment.",
        github: "#", // Add your GitHub link
        demo: "#",   // Add your demo link if available
    },
    {
        title: "Online Food Ordering Application for College",
        image: "https://cdn.dribbble.com/users/926537/screenshots/4502924/media/3a1d3e55d392e07f7289dcd83c3a18fa.png",
        description:
            "Built a responsive full-stack web application for 10+ campus food stalls. Developed the user interface using HTML, CSS, and JavaScript, and designed the backend to manage dynamic orders and menus efficiently.",
        github: "#",
        demo: "#",
    },
    {
        title: "Object Detection using YOLOv8",
        image: "https://miro.medium.com/v2/resize:fit:704/0*S0RD9WszR44AbOds.png",
        description:
            "Developed a real-time traffic sign detection system using YOLOv8 and OpenCV. Trained the model on a custom dataset for multi-class classification, implemented preprocessing and augmentation techniques to enhance accuracy.",
        github: "#",
        demo: "#",
    },
];

/* Function to open project modal */
function openModal(index) {
    const modal = document.getElementById("projectModal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const modalLinks = document.getElementById("modal-links");

    const project = projectData[index - 1];

    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalDescription.textContent = project.description;

    modalLinks.innerHTML = `
        ${project.github !== "#" ? `<a href="${project.github}" target="_blank">GitHub</a>` : ""}
        ${project.demo !== "#" ? `<a href="${project.demo}" target="_blank">Live Demo</a>` : ""}
    `;

    modal.style.display = "flex";
}

/* Close the modal */
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

/* ------------------ Contact Form Submission ------------------ */
const scriptURL = 'https://script.google.com/macros/s/AKfycbxS6cw9AAzgW7mgsrsXuOKzOinFwvCbjQtLpaHpB3gGw6YFhMGl7hh4B7AEAbfQZBQK/exec';
const form = document.forms['submit-to-google-sheet'];
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => {
            showNotification('success');
            form.reset();
        })
        .catch((error) => {
            showNotification('error');
            console.error('Error!', error.message);
        });
});

/* Show success or error message */
function showNotification(type) {
    const notification = type === 'success' ? successMessage : errorMessage;

    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
