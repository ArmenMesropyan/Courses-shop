import * as Pages from '../../pages';

function onPageChanged() {
    const links = document.getElementsByClassName('route-link');
    const page = location.pathname;
    Object.values(links).forEach((link) => {
        if (link.getAttribute('href') === page) {
            const { component } = link.dataset;
            Pages[component]();
        }
    });
}

export default function generateRouter() {
    window.onload = onPageChanged;
}