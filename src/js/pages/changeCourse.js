import {
    Navigation,
    logOut,
    Course,
    CreateInputs,
} from '../components';
import { generateInputs, firebaseActions } from '../helpers';

const ChangeCourse = (courses) => {
    console.log('courses: ', courses);

    if (!courses) {
        document.getElementById('root').innerHTML = '<h1>Oops.. something goes wrong! :(</h1>';
        return;
    }

    document.getElementById('root').innerHTML = `
        ${Navigation()}
        <section class="course-inputs">
            <div class="container">
                ${CreateInputs()}
            </div>
        </section>
        <section class="course-presentation">
            <div class="container">
                ${Course()}
            </div>
        </section>
    `;

    const registeredLink = document.querySelector('.registered');

    if (!registeredLink) return;
    registeredLink.addEventListener('click', logOut);

    const [, key] = location.pathname.split('*');
    const course = courses[key];
    console.log('course: ', course);

    if (!course) {
        document.getElementById('root').innerHTML = '<h1>There is no courses with this key!</h1>';
        return;
    }

    const courseName = document.getElementById('course_name');
    const coursePrice = document.getElementById('course_price');
    const courseDesc = document.getElementById('course_desc');
    const courseImage = document.getElementById('course_image');
    const courseLink = document.getElementById('course_link');

    courseName.value = course.name;
    coursePrice.value = course.price;
    courseDesc.value = course.description;
    courseImage.value = course.image;
    courseLink.value = course.link;

    generateInputs((state) => {
        firebaseActions.updateCourse(key, state);
    }, 'Change Course');
}

export default ChangeCourse;