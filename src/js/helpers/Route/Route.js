import * as Pages from '../../pages';
import { firebaseActions } from '..';

function onPageChanged() {
    const links = document.getElementsByClassName('route-link');
    const page = location.pathname;
    Object.values(links).forEach((link) => {
        if (link.getAttribute('href') === page) {
            const { component } = link.dataset;
            if (component === 'Courses') {
                firebaseActions.getCourses(Pages[component]);
                return;
            }
            Pages[component]();
        }
        link.remove();
    });
}

export default function generateRouter() {
    window.onload = onPageChanged;
}