const cards = document.querySelectorAll('.faq-card');

cards.forEach((card) => {
    const button = card.querySelector('.faq-btn');
    if (!button) return;

    button.addEventListener('click', () => {

        const isAlreadyOpen = card.classList.contains('is-open');

        cards.forEach((otherCard) => {
            const shouldOpen = otherCard === card && !isAlreadyOpen;
            const otherBtn = otherCard.querySelector('.faq-btn');

            otherCard.classList.toggle('is-open', shouldOpen);

            if (otherBtn) {
                otherBtn.textContent = shouldOpen ? '-' : '+';
                otherBtn.setAttribute('aria-expanded', String(shouldOpen));
            }
        });
    });
});