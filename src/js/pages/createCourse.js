import {
    Navigation,
    logOut,
    Course,
    CreateInputs,
} from '../components';
import './createCourse.css';
import { generateInputs, cookieActions, firebaseActions } from '../helpers';

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

    generateInputs(firebaseActions.setCourse);
};

export default CreateCourse;