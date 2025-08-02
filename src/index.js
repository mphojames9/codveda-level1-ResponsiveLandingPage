
const menuBtn = document.querySelector("#menuToggle");
const sideMenuLinks = document.querySelectorAll(".side-menu-links");
const submitBtn = document.querySelector(".submitBtn");



menuBtn.addEventListener("click", () => toggleMenu());
sideMenuLinks.forEach(sideMenuLink => sideMenuLink.addEventListener("click", toggleMenu));
const contactForm = document.querySelector('#contactForm');

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const toast = document.getElementById('toast');
    const form = event.target;
    let isSuccessful = true; // In a real app, this would be determined by a server response or validation

    // Simulate validation
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;

    if (name.length < 4 || email.length < 5) {
        isSuccessful = false;
    }

    if (isSuccessful) {
        // Successful submission logic
        toast.textContent = 'Message sent successfully!';
        toast.className = 'toast show success'; // Add the 'success' class
        form.reset(); // Reset the form only on success
    } else {
        // Error submission logic
        toast.textContent = 'Please fill out all fields correctly.';
        toast.className = 'toast show error';
    }

    setTimeout(() => {
        toast.className = 'toast';
    }, 3000);
});

const menu = document.getElementById('sideMenu');
function toggleMenu() {
    const toggle = document.getElementById('menuToggle');
    const isOpen = menu.classList.contains('open');
    menu.classList.toggle('open');
    toggle.textContent = isOpen ? '☰' : '×';
}

const header = document.querySelector('header');
window.onscroll = function () {
    const btn = document.getElementById('backToTop');
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    header.style.display = window.scrollY < 300 ? 'block' : 'none';
    
};

const testimonials = [
    {
        text: "“CodVeda's smartwatch detected my fall instantly and alerted my emergency contact.”",
        author: "— Sarah M., Cape Town"
    },
    {
        text: "“A game-changer for senior citizens! Real-time alerts gave us peace of mind.”",
        author: "— Rohan D., Mumbai"
    },
    {
        text: "“I've never felt safer during my solo hikes. Brilliant device.”",
        author: "— Lena K., Norway"
    }
];
let index = 0;
setInterval(() => {
    index = (index + 1) % testimonials.length;
    document.getElementById('testimonialText').textContent = testimonials[index].text;
    document.getElementById('testimonialAuthor').textContent = testimonials[index].author;
}, 5000);

// Intersection Observer to fade in elements
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, {
    threshold: 0.2 // Trigger when 20% of element is visible
});

// Target all elements with fade-section class
document.querySelectorAll('.fade-section').forEach(el => {
    observer.observe(el);
});
