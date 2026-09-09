document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle Functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active-nav');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active-nav')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Header Scroll Effect (Box Shadow on Scroll)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.5)';
            header.style.backgroundColor = 'rgba(18, 24, 36, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = '#121824';
        }
    });

    // 3. Scroll Reveal Animation for Sections
    const sections = document.querySelectorAll('section');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Uncomment agar sirf ek baar animation chalani ho
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.1
    });

    sections.forEach(section => {
        section.classList.add('reveal-section');
        sectionObserver.observe(section);
    });

    // 4. Interactive WhatsApp / Consultation Click Simulation
    const whatsappButtons = document.querySelectorAll('.btn-orange, .fa-whatsapp');
    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Agar aap chahte hain ki direct WhatsApp link open ho toh ye rokne ki zarurat nahi.
            // Lekin agar testing ke liye alert dena ho toh uncomment kar sakte hain:
            // console.log("Redirecting to Solar Citizen WhatsApp Support...");
        });
    });

});