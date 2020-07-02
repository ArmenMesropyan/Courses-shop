import './coursesList.css';
import { Course } from '..';

const CoursesList = (courses) => {
    const user = localStorage.getItem('googleAuthId');
    console.log('user: ', user);
    if (!courses) return '';
    const res = Object.values(courses).map((course) => `
        <li class="courses__item">
            ${Course(course)}
        </li>
    `);
    return `
        <section class="courses">
            <div class="container">
                <ul class="courses__list">
                    ${res}
                </ul>
            </div>
        </section>
    `;
};

export default CoursesList;