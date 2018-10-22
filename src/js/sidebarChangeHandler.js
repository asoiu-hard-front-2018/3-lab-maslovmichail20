function sidebarSetActiveHandler(element) {
    element.classList.add('sidebar__content_active');

    const blog = [document.querySelector('.post-wrapper'), document.querySelector('.post_size-big')];
    blog.forEach(elem => elem.classList.add('animate-blog'));
    setTimeout(() => {
        blog.forEach(elem => elem.classList.remove('animate-blog'));
    }, 1000);
}

function resetPrevActive() {
    document.querySelector('.sidebar__content_active').classList.remove('sidebar__content_active');
}

export default function(element) {
    return () => {
        resetPrevActive();
        sidebarSetActiveHandler(element);
    }
}