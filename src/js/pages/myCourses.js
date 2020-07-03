import {
    Navigation,
    logOut,
    CoursesActions,
} from '../components';

import { firebaseActions, cookieActions } from '../helpers';

console.log('logOut: ', logOut);
const MyCourse = (courses) => {
    const user = cookieActions.getCookie('googleAuthId');
    if (!user) {
        document.getElementById('root').innerHTML = '<h1>Please Registrate!</h1>';
        return;
    }

    if (!courses) {
        document.getElementById('root').innerHTML = '<h1>Your course list is empty :(</h1>';
        return;
    }

    const userCourses = Object.entries(courses).filter(([, course]) => course.user === user);

    document.getElementById('root').innerHTML = `
        ${Navigation()}
        <section class="courses-actions">
            <div class="container">
                <ul class="courses-actions__list collection">
                    ${CoursesActions(userCourses)}
                </ul>
            </div>
        </section>
    `;

    const registeredLink = document.querySelector('.registered');

    if (!registeredLink) return;
    registeredLink.addEventListener('click', logOut);

    const deleteButtons = document.querySelectorAll('.courses-actions__delete');

    deleteButtons.forEach((btn) => btn.addEventListener('click', ({ target }) => {
        const id = target.dataset.key;
        firebaseActions.deleteCourse(id);
    }));
};

export default MyCourse;