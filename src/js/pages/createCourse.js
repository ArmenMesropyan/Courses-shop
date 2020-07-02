import { Navigation, logOut, Course, CreateInputs } from '../components';
import './createCourse.css';

const CreateCourse = () => {
        const isRegister = localStorage.getItem('googleAuthId');

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

    const changeState = () => {
        const currentState = {
            image: courseImage.value,
            name: courseName.value,
            description: courseDesc.value,
            price: coursePrice.value,
        };
        document.querySelector('.course-presentation').innerHTML = `
            <div class="container">
                ${Course(currentState)}
                <button class="course-presentation__btn btn waves-effect waves-light" type="button" name="action">Add Course</button>
            </div>
        `;
    };

    courseName.addEventListener('input', changeState);
    coursePrice.addEventListener('input', changeState);
    courseDesc.addEventListener('input', changeState);
    courseImage.addEventListener('input', changeState);
};

export default CreateCourse;