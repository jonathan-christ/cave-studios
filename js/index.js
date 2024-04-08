let carouselItems = document.querySelectorAll('[data-carousel-item]');
init()

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
    carouselItems.forEach((item, i) => {
        if (i === index) {
            item.setAttribute('data-carousel-item', 'active');
        } else {
            item.setAttribute('data-carousel-item', '');
        }
    });
}

function updateDescription() {
    // let cont = document.getElementById('gallery-desc').children
    // let items = document.querySelectorAll('[data-carousel-item]')
    // let active

    // items.forEach((item, idx) => {
    //     if (item.getAttribute('data-carousel-item') === 'active') {
    //         active = idx;
    //     }
    // })
    // let data = idxToDesc(active)

    // cont["title"].innerHTML = data[0]
    // cont["desc"].innerHTML = data[1]
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

// function parallax() {
//     let body = document.querySelector("#body")
//     body.addEventListener('scroll', function () {
//         var scrollPosition = body.scrollTop
//         let bg = document.querySelector("#bg")
//         bg.style.transform = 'translateY(' + scrollPosition *0.5 + 'px)';
//     });
// }

function navbar() {
    body.addEventListener('scroll', function () {
        let navbar = document.querySelector("#navbar");
        var element = document.querySelector('#blank');
        var elementPosition = (element.offsetTop + element.offsetHeight);
        if (body.scrollTop > elementPosition) {
            navbar.classList.add('bg-appear')
            navbar.classList.remove('bg-disappear')
            navbar.querySelector("#logo").classList.remove('invisible')
        } else {
            navbar.querySelector("#logo").classList.add('invisible')
            navbar.classList.remove('bg-appear')
            navbar.classList.add('bg-disappear')
        }

        ['#services', '#about', '#contacts'].map((element, idx) => {
            element = document.querySelector(element)
            let navEl = Array.from(document.querySelector("#links").children)
            let elB = (element.offsetTop-200 + element.offsetHeight)
            if (body.scrollTop >= element.offsetTop-200 && body.scrollTop <= elB && !element.classList.contains('bg-gray-800')) {
                navEl[idx].classList.add('bg-gray-800')
            } else {
                navEl[idx].classList.remove('bg-gray-800')
            }
        });
    });
}

function init() {
    updateActiveState(0)
    updateDescription()
    // parallax()
    navbar()
}

