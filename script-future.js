document.addEventListener('DOMContentLoaded', () => {

    // 1. Scroll Spy for Side Dots & Navigation Links
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sideDots = document.querySelectorAll('.side-dots .dot');

    function updateActiveOnScroll() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150; // offset for sticky navbar
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Update Nav Links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });

                // Update Side Dots
                sideDots.forEach(dot => {
                    dot.classList.remove('active');
                    if (dot.getAttribute('href') === `#${sectionId}`) {
                        dot.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveOnScroll);

    // 2. Smooth Scrolling on Side Dots Click
    sideDots.forEach(dot => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Calculator Button Click Handler
    const calcBtn = document.querySelector('.calc-btn');
    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            alert('Solar Calculator coming soon! You can estimate system sizes directly via WhatsApp.');
        });
    }

    // 4. Interactive Simulation for WhatsApp Chat Inputs (Optional Enhancement)
    const talkChatBubbles = document.querySelectorAll('.talk-chat-card .bubble');
    if (talkChatBubbles.length > 0) {
        talkChatBubbles.forEach(bubble => {
            bubble.style.transition = 'transform 0.2s ease, opacity 0.2s ease';
            bubble.addEventListener('mouseenter', () => {
                bubble.style.transform = 'scale(1.02)';
            });
            bubble.addEventListener('mouseleave', () => {
                bubble.style.transform = 'scale(1)';
            });
        });
    }

});