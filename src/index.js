        function toggleMenu() {
            const menu = document.getElementById('sideMenu');
            const toggle = document.getElementById('menuToggle');
            const isOpen = menu.classList.contains('open');
            menu.classList.toggle('open');
            toggle.textContent = isOpen ? '☰' : '×';
        }

                function handleSubmit(event) {
            event.preventDefault();
            const toast = document.getElementById('toast');
            toast.textContent = 'Message sent successfully!';
            toast.className = 'toast show';
            setTimeout(() => toast.className = 'toast', 3000);
        }

        window.onscroll = function () {
            const btn = document.getElementById('backToTop');
            btn.style.display = window.scrollY > 300 ? 'block' : 'none';
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
        threshold: 0.2 
    });


    document.querySelectorAll('.fade-section').forEach(el => {
        observer.observe(el);
    });


    let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    lastScrollY = window.scrollY;
});