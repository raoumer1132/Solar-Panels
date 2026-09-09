document.addEventListener('DOMContentLoaded', () => {

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');

        questionBtn.addEventListener('click', () => {
            // Check if current item is already active
            const isActive = item.classList.contains('active');

            // Optional: Close all other open FAQs (Accordion behavior)
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

});