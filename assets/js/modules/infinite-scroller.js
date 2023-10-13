const scrollers = document.querySelectorAll('.scroller')

if (!window.matchMedia("(prefers-reduced-motion)").matches) {
    addAnimation()
}

function addAnimation() {    
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true)
        
        const scrollerList = scroller.querySelector('.scroller__list')
        const scrollerItems = Array.from(scrollerList.children)        
        
        scrollerItems.forEach(item => {
            const duplicatedItem = item.cloneNode(true)
            duplicatedItem.setAttribute('aria-hidden', true)
            scrollerList.appendChild(duplicatedItem)
        })
    })
}