const cards = document.querySelectorAll('.faq-card');

cards.forEach((card) => {
    const title = card.querySelector('.faq-title');
    const button = card.querySelector('.faq-btn');
    if (!button) return;

    button.addEventListener('click', () => {

        const isAlreadyOpen = card.classList.contains('is-open');

        cards.forEach((otherCard) => {
            const shouldOpen = otherCard === card && !isAlreadyOpen;
            const otherBtn = otherCard.querySelector('.faq-btn');
            const title = otherCard.querySelector('.faq-title');

            otherCard.classList.toggle('is-open', shouldOpen);

            if (title) {
                title.classList.toggle('faq-active', shouldOpen);
            }

            if (otherBtn) {
                otherBtn.textContent = shouldOpen ? '-' : '>';
                otherBtn.setAttribute('aria-expanded', String(shouldOpen));
            }
        });
    });
});