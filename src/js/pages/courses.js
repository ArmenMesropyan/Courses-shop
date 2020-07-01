import './courses.css';
import { Navigation, CoursesList, logOut } from '../components';

function serializeCourses(courses) {
    return Object.entries(courses).reduce((acc, [key, value]) => {
        value.forEach((course) => {
            course.user = key;
            acc.push(course);
        });
        return acc;
    }, []);
}

const Courses = () => {
    const courses = {
        J1uZWhRCH9NIHg7gI3mmI3Ufk2G2: [{
                name: 'JS',
                price: '1000',
                description: 'JS Description',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
            },
            {
                name: 'JS',
                price: '1000',
                description: 'JS Description',
            },
        ],
    };

    document.getElementById('root').innerHTML = `
        ${Navigation()}
        ${CoursesList(serializeCourses(courses))}
    `;

    const registeredLink = document.querySelector('.registered');

    if (!registeredLink) return;
    registeredLink.addEventListener('click', logOut);
};

export default Courses;