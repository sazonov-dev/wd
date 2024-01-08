const cards = document.querySelectorAll('.gallery__card');

const mouseEvent = (event) => {
    const target = event.target;
    const card = target.closest('.gallery__card');
    const overlay = card.querySelector('.gallery__overlay');
    const view = card.querySelector('.gallery__view');

    if (!overlay.classList.contains('active') && !view.classList.contains('active')) {
        overlay.classList.add('active');
        view.classList.add('active');
    } else {
        overlay.classList.remove('active');
        view.classList.remove('active');
    }
}

const startApp = () => {
    cards.forEach((card) => card.addEventListener('mouseover', mouseEvent))
    cards.forEach((card) => card.addEventListener('mouseout', mouseEvent))
}

startApp();
