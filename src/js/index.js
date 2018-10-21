import smoothScrollToBlog from './smoothScroll';
import sidebarChangeHandler from './sidebarChangeHandler';

const sidebarItems = document.querySelectorAll('.sidebar__content');
for (let i = 0 ; i < sidebarItems.length ; i++) {
    sidebarItems[i].onclick = sidebarChangeHandler(sidebarItems[i]);
}

document.querySelector('.picture__down-button').onclick = smoothScrollToBlog;
