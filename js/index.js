let carouselItems = document.querySelectorAll('[data-carousel-item]');
updateActiveState(0)
updateDescription()

function idxToDesc(idx) {
    let title, desc
    switch (idx) {
        case 0:
            title = "Traditional Art"
            desc = "This is traditional art."
            break
        case 1:
            title = "Digital Art"
            desc = "This is traditional art."
            break
        case 2:
            title = "Graphic Design"
            desc = "This is traditional art."
            break
        case 3:
            title = "Graphic Design Assets"
            desc = "This is traditional art."
            break
        case 4:
            title = "Posters"
            desc = "This is traditional art."
            break
    }

    return [title, desc]
}

function updateActiveState(index) {
    let carouselItems = document.querySelectorAll('[data-carousel-item]');
    carouselItems.forEach((item, i) => {
        if (i === index) {
            item.setAttribute('data-carousel-item', 'active');
        } else {
            item.setAttribute('data-carousel-item', '');
        }
    });
}

function updateDescription() {
    let cont = document.getElementById('gallery-desc').children
    let items = document.querySelectorAll('[data-carousel-item]')
    let active

    items.forEach((item, idx) => {
        if (item.getAttribute('data-carousel-item') === 'active') {
            active = idx;
        }
    })

    console.log("bruh " + active)
    let data = idxToDesc(active)

    cont["title"].innerHTML = data[0]
    cont["desc"].innerHTML = data[1]
}

document.querySelectorAll('[data-carousel-slide-to]').forEach((button, index) => {
    button.addEventListener('click', () => {
        updateActiveState(index);
        updateDescription();
    });
});

document.querySelector('[data-carousel-prev]').addEventListener('click', () => {
    let activeIndex = Array.from(carouselItems).findIndex(item => item.getAttribute('data-carousel-item') === 'active');
    let prevIndex = activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
    updateActiveState(prevIndex);
    updateDescription();
});

document.querySelector('[data-carousel-next]').addEventListener('click', () => {
    let activeIndex = Array.from(carouselItems).findIndex(item => item.getAttribute('data-carousel-item') === 'active');
    let nextIndex = activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
    updateActiveState(nextIndex);
    updateDescription();
});

