document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active-nav');
        });
    }

    // 2. Calculator Tabs Toggle (By Bill / By Appliances)
    const tabBill = document.getElementById('tabBill');
    const tabAppliances = document.getElementById('tabAppliances');
    const billGroup = document.getElementById('billGroup');

    if (tabBill && tabAppliances) {
        tabBill.addEventListener('click', () => {
            tabBill.classList.add('active');
            tabAppliances.classList.remove('active');
            if(billGroup) billGroup.style.display = 'block';
        });

        tabAppliances.addEventListener('click', () => {
            tabAppliances.classList.add('active');
            tabBill.classList.remove('active');
            if(billGroup) billGroup.style.display = 'none';
        });
    }

    // 3. System Type Card Selector (On-Grid / Hybrid)
    const systemCards = document.querySelectorAll('.system-card');
    let selectedSystemType = 'On-Grid'; // Default

    systemCards.forEach(card => {
        card.addEventListener('click', () => {
            systemCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedSystemType = card.querySelector('h3').innerText;
        });
    });

    // 4. Calculator Activation & WhatsApp Pricing Integration
    const calculateBtn = document.querySelector('.calc-form .btn-orange');
    const monthlyBillInput = document.getElementById('monthlyBill');
    const userCitySelect = document.getElementById('userCity');

    if (calculateBtn) {
        calculateBtn.addEventListener('click', (e) => {
            e.preventDefault();

            const isBillTabActive = tabBill.classList.contains('active');
            let billValue = 0;
            let cityValue = userCitySelect ? userCitySelect.value : 'Not Selected';

            if (cityValue === "") {
                alert("Please select your city!");
                return;
            }

            if (isBillTabActive) {
                if (!monthlyBillInput || monthlyBillInput.value.trim() === "") {
                    alert("Please enter your monthly electricity bill!");
                    monthlyBillInput.focus();
                    return;
                }
                billValue = monthlyBillInput.value.replace(/,/g, '');
            }

            // Suggested System Size Logic based on Bill (Approx Pakistan Slabs)
            let suggestedKw = "5 kW";
            let numericBill = parseInt(billValue);

            if (!isNaN(numericBill)) {
                if (numericBill < 25000) suggestedKw = "3 kW - 4 kW";
                else if (numericBill < 45000) suggestedKw = "5 kW - 7 kW";
                else if (numericBill < 80000) suggestedKw = "8 kW - 10 kW";
                else suggestedKw = "12 kW - 15 kW+";
            } else if (!isBillTabActive) {
                suggestedkW = "Custom Appliances Load";
            }

            // WhatsApp Redirect with Form Data
            const whatsappNumber = "923001234567"; // Yahan apna WhatsApp number likh dein (with country code)
            let whatsappMessage = `*Solar Calculator Inquiry*%0A` +
                                  `----------------------------------%0A` +
                                  `*Calculation Type:* ${isBillTabActive ? 'By Bill' : 'By Appliances'}%0A` +
                                  `${isBillTabActive ? `*Monthly Bill:* PKR ${monthlyBillInput.value}%0A` : ''}` +
                                  `*City:* ${cityValue.toUpperCase()}%0A` +
                                  `*System Type:* ${selectedSystemType}%0A` +
                                  `*Suggested System:* ${suggestedKw}%0A` +
                                  `----------------------------------%0A` +
                                  `Please share the final quotation and details.`;

            // Open WhatsApp
            window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
        });
    }

    // 5. FAQ Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const icon = header.querySelector('i');
            
            // Toggle active class
            item.classList.toggle('active-faq');

            // Switch plus/minus icon
            if (item.classList.contains('active-faq')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
});