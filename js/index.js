// let carouselItems = document.querySelectorAll('[data-carousel-item]');
const animMap = new Map()
animMap.set('gen-hidden', 'gen-show')
animMap.set('tm-hidden', 'tm-show')

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
    let cont = document.getElementById('gallery-desc').children
    let items = document.querySelectorAll('[data-carousel-item]')
    let active

    items.forEach((item, idx) => {
        if (item.getAttribute('data-carousel-item') === 'active') {
            active = idx;
        }
    })
    let data = idxToDesc(active)

    cont["title"].innerHTML = data[0]
    // cont["desc"].innerHTML = data[1]
}

function navbar() {
    body.addEventListener('scroll', function () {
        let navbar = document.querySelector("#navbar");
        var element = document.querySelector('#blank');
        var elementPosition = (element.offsetTop + 200);
        if (body.scrollTop > elementPosition) {
            navbar.classList.add('bg-appear')
            navbar.classList.remove('bg-disappear')
            navbar.querySelector("#logo").classList.remove('logo-invis')
            navbar.querySelector("#logo").classList.add('logo-vis')
        } else {
            navbar.querySelector("#logo").classList.add('logo-invis')
            navbar.querySelector("#logo").classList.remove('logo-vis')
            navbar.classList.remove('bg-appear')
            navbar.classList.add('bg-disappear')
        }

        ['#services', '#about', '#contacts'].map((element, idx) => {
            element = document.querySelector(element)
            let navEl = Array.from(document.querySelector("#links").children)
            let elB = (element.offsetTop + 700 + element.offsetHeight)
            if (body.scrollTop >= element.offsetTop + 700 && body.scrollTop <= elB && !element.classList.contains('bg-gray-800')) {
                navEl[idx].classList.add('bg-gray-800')
            } else {
                navEl[idx].classList.remove('bg-gray-800')
            }
        });
    });
}

function observe(cname) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animMap.get(cname))
            } else {
                entry.target.classList.remove(animMap.get(cname))
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.' + cname)
    hiddenElements.forEach(el => { observer.observe(el) })
}

function modal(){
    var openmodal = document.querySelectorAll('.modal-open')
    for (let i = 0; i < openmodal.length; i++) {
        openmodal[i].addEventListener('click', function(event){
            event.preventDefault()
            console.log(i);
            toggleModal(openmodal[i].getAttribute('src'));
        })
    }
    
    const overlay = document.querySelector('.modal-overlay')
    overlay.addEventListener('click', toggleModal)
    
    document.onkeydown = function(evt) {
        evt = evt || window.event
        var isEscape = false
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc")
        } else {
            isEscape = (evt.keyCode === 27)
        }
        if (isEscape && document.body.classList.contains('modal-active')) {
            toggleModal()
        }
    };
    
    function toggleModal (arg = "") {
        const body = document.querySelector('body')
        const modal = document.querySelector('.modal')
        modal.classList.toggle('opacity-0')
        modal.classList.toggle('pointer-events-none')
        body.classList.toggle('modal-active')
    
        if(arg){
            document.getElementById('display-image').setAttribute('src', arg);
        }
    }
}

function notAvail() {
    alert("Under Construction!");
}

function init() {
    observe('gen-hidden')
    observe('tm-hidden')

    modal()
    navbar()

}


