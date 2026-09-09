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

    // 2. Header Scroll Effect (Box Shadow & Blur on Scroll)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.6)';
            header.style.backgroundColor = 'rgba(18, 24, 36, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = '#121824';
        }
    });

    // 3. Scroll Reveal Animation for Contact Sections & Cards
    const sections = document.querySelectorAll('section');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.08
    });

    sections.forEach(section => {
        section.classList.add('reveal-section');
        sectionObserver.observe(section);
    });

    // 4. Interactive Action for WhatsApp & Direct Links
    const contactLinks = document.querySelectorAll('.card-link, .dir-link, .btn-orange');
    contactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Aap yahan chahein toh analytics ya custom popup event laga sakte hain
            console.log(`Action triggered: ${link.textContent.trim()}`);
        });
    });

    // 5. City Pills Click Effect (Active state toggle)
    const cityPills = document.querySelectorAll('.city-pill');
    cityPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            cityPills.forEach(p => p.style.borderColor = 'rgba(255, 255, 255, 0.08)');
            pill.style.borderColor = '#ea580c';
        });
    });

});