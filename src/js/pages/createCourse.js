import {
    Navigation,
    logOut,
    Course,
    CreateInputs,
} from '../components';
import './createCourse.css';
import { firebaseActions, cookieActions } from '../helpers';

const CreateCourse = () => {
        const isRegister = cookieActions.getCookie('googleAuthId');

        document.getElementById('root').innerHTML = `
            ${isRegister ? `
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
            ` : `
                <h1>Please Registrate!</h1>
            `}
        `;

    const registeredLink = document.querySelector('.registered');

    if (!registeredLink) return;
    registeredLink.addEventListener('click', logOut);

    const courseName = document.getElementById('course_name');
    const coursePrice = document.getElementById('course_price');
    const courseDesc = document.getElementById('course_desc');
    const courseImage = document.getElementById('course_image');
    const courseLink = document.getElementById('course_link');

    const validateInputs = ({ name, price, link }) => {
        const regExp = {
            name: /^[a-zA-Z ]{2,30}$/,
            price: /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/,
            link: /(https?:\/\/[^\s]+)/g,
        };

        const inputs = { name, price, link };

        const isValid = Object.entries(inputs).every(([key, value]) => regExp[key].test(value));

        if (!isValid) return '<p>Invalid course</p>';

        return `
            <button class="course-presentation__btn btn waves-effect waves-light" type="button" name="action">Add Course</button>
        `;
    };

    const changeState = () => {
        const currentState = {
            image: courseImage.value,
            name: courseName.value,
            description: courseDesc.value,
            price: coursePrice.value,
            link: courseLink.value,
            user: cookieActions.getCookie('googleAuthId'),
        };
        const isValid = validateInputs(currentState);

        document.querySelector('.course-presentation').innerHTML = `
            <div class="container">
                ${Course(currentState)}
                ${isValid}
            </div>
        `;

        const btn = document.querySelector('.course-presentation__btn');

        if (btn) {
            btn.addEventListener('click', () => {
                firebaseActions.setCourse(currentState);
                location.replace('/');
            });
        }
    };

    courseName.addEventListener('input', changeState);
    coursePrice.addEventListener('input', changeState);
    courseDesc.addEventListener('input', changeState);
    courseImage.addEventListener('input', changeState);
    courseLink.addEventListener('input', changeState);
};

export default CreateCourse;