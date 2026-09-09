document.addEventListener('DOMContentLoaded', () => {

    // 1. Smooth Scroll for Anchor Links
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

    // 2. Solar Calculator Button Trigger
    const calcBtns = document.querySelectorAll('#calcBtn, #floatingCalcBtn');
    calcBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = 'solutions.html#calculator';
        });
    });

    // 3. Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.style.background = 'rgba(7, 9, 14, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.6)';
        } else {
            navbar.style.background = 'rgba(15, 20, 28, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

});