import './coursesList.css';
import { Course } from '..';

const CoursesList = (courses) => {
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