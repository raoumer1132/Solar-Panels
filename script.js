document.addEventListener('DOMContentLoaded', () => {
    // Calculator button interaction
    const calcBtn = document.getElementById('calcBtn');
    
    calcBtn.addEventListener('click', () => {
        alert('Solar System Calculator clicked!');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Add click events to call/whatsapp buttons
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log(`Clicked: ${e.target.innerText}`);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // UI Elements
    const modal = document.getElementById('calcModal');
    const openBtns = document.querySelectorAll('.open-calculator');
    const closeBtn = document.getElementById('closeModal');
    const calculateBtn = document.getElementById('calculateSizeBtn');
    const unitInput = document.getElementById('unitInput');
    const resultBox = document.getElementById('calcResult');
    const waBtn = document.getElementById('waBtn');
    const callBtn = document.getElementById('callBtn');

    // Open Calculator Modal
    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        resultBox.style.display = 'none';
    });

    // Close Modal when clicking outside content box
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            resultBox.style.display = 'none';
        }
    });

    // Solar System Size Calculation Logic
    calculateBtn.addEventListener('click', () => {
        const units = parseFloat(unitInput.value);
        if (units && units > 0) {
            // Formula: 1 kW generates ~120 units per month in Pakistan
            const systemKw = (units / 120).toFixed(1);
            resultBox.innerHTML = `Recommended System: <span style="color:#f97316;">${systemKw} kW</span> Solar System`;
            resultBox.style.display = 'block';
        } else {
            resultBox.innerHTML = `<span style="color:#ef4444;">Please enter valid monthly units!</span>`;
            resultBox.style.display = 'block';
        }
    });

    // WhatsApp Action
    if (waBtn) {
        waBtn.addEventListener('click', () => {
            window.open('https://wa.me/923176527111', '_blank');
        });
    }

    // Direct Call Action
    if (callBtn) {
        callBtn.addEventListener('click', () => {
            window.location.href = 'tel:+923176527111';
        });
    }

});