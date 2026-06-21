/* ==========================================================================
   Nikhil Jangir - Portfolio Interactivity & Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mouse Spotlight Glow Effect
    const pointerGlow = document.getElementById('pointer-glow');
    
    document.addEventListener('mousemove', (e) => {
        // Update global mouse coordinates for the background glow
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    });

    // 2. Mobile Nav Menu Toggle
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('mobile-active')) {
            icon.classList.remove('fa-bars-staggered');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars-staggered');
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('mobile-active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars-staggered');
        });
    });

    // 3. Sticky Header on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Scroll Reveal (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Trigger width animation for skill fills inside this card
                const skillFills = entry.target.querySelectorAll('.fill');
                skillFills.forEach(fill => {
                    const widthVal = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = widthVal;
                    }, 100);
                });
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    // 5. Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // 6. Interactive Skill Category hover (cards slightly tilting or adapting mouse-gradient)
    const cards = document.querySelectorAll('.skills-category-card, .project-card, .stat-card, .publication-card-glow');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 7. Contact Form Handling
    const contactForm = document.getElementById('portfolio-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const formAction = contactForm.getAttribute('action');
            if (formAction.includes('placeholder')) {
                e.preventDefault();
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;

                // Create custom premium popup or modal notification
                alert(`Thanks for reaching out, ${name}! Since this is a static preview, your message cannot be sent directly yet.\n\nTo make this form functional, you can replace the action URL in index.html (line 424) with a service like Formspree or Web3Forms.\n\nAlternatively, you can email me directly at: edre770@gmail.com`);
            }
        });
    }
});
