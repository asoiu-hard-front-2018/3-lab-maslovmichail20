function sidebarSetActiveHandler(element) {
    element.classList.add('sidebar__content_active');
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