function onPageChanged() {
    const links = document.getElementsByClassName('route-link');
    const page = location.pathname;
    Object.values(links).forEach((link) => {
        if (link.getAttribute('href') === page) {
            console.log(link.dataset.component);
        }
    });
}

export default function generateRouter() {
    window.onload = onPageChanged;
}