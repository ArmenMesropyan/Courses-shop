import './courses.css';
import { Navigation, CoursesList } from '../components';

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
};

export default Courses;