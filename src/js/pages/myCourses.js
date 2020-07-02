import {
    Navigation,
    logOut,
    CoursesActions,
} from '../components';

const MyCourse = (courses) => {
    const user = localStorage.getItem('googleAuthId');
    if (!user) {
        document.getElementById('root').innerHTML = '<h1>Please Registrate!</h1>';
        return;
    }

    const userCourses = Object.values(courses).filter((course) => course.user === user);
    console.log('userCourses: ', userCourses);

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
};

export default MyCourse;