document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scrolling for Internal Anchor Links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 2. Solar Calculator Triggers
    const calcTriggers = document.querySelectorAll('.calc-trigger, #calcBtn, #floatingCalcBtn');
    
    calcTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const calcSection = document.querySelector('#calculator');
            if (calcSection) {
                calcSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. Dynamic Active Navigation Link Switcher on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // 4. Navbar Background Blur Adjuster on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(7, 9, 14, 0.95)';
            navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(18, 22, 31, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

});