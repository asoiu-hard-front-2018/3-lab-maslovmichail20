const handlers = {
    blog(scrolled) {
        if (scrolled > document.querySelector('.header').offsetHeight) {
            setNeededMargin(document.querySelector('.post-container').children);
        }
    },
    posts(scrolled) {
        const slider = document.querySelector('.blog-slider');
        if (scrolled > slider.offsetHeight + slider.offsetTop - slider.offsetWidth * 0.3) {
            setNeededMargin(document.querySelectorAll('.post-container')[1].children);
        }
    }
};

const removeClass = element => {
  element.classList.remove('reset-margin-top');
};

const setNeededMargin = elements => {
    for (let i = 0 ; i < elements.length ; i++) {
        setTimeout(() => {
            removeClass(elements[i])
        }, 100 * i);
    }
};

export default function() {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    handlers.blog(scrolled);
    handlers.posts(scrolled);
}

