import './courses.css';
import { Navigation, CoursesList, logOut } from '../components';

const Courses = (courses) => {
    document.getElementById('root').innerHTML = `
        ${Navigation()}
        ${CoursesList(courses)}
    `;

    const registeredLink = document.querySelector('.registered');

    if (!registeredLink) return;
    registeredLink.addEventListener('click', logOut);
};

export default Courses;