const items = document.querySelector('.items');

items.addEventListener('wheel', e => {
    if (e.deltaY < 0) {
        e.target.scrollBy(800, 0);
    } else {
        e.target.scrollBy(-800, 0);
    }
});

