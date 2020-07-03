import './courses.css';
import { Navigation, CoursesList, logOut } from '../components';
import { deleteTextNodes } from '../helpers';

const Courses = (courses) => {
    document.getElementById('root').innerHTML = `
        ${Navigation()}
        ${CoursesList(courses)}
    `;

    const registeredLink = document.querySelector('.registered');
    deleteTextNodes('.courses__list');

    if (!registeredLink) return;
    registeredLink.addEventListener('click', logOut);
};

export default Courses;