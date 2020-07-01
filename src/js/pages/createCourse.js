import { Navigation, logOut, Course } from '../components';
import './createCourse.css';

const CreateCourse = (state = {}) => {
        const isRegister = localStorage.getItem('googleAuthId');

        document.getElementById('root').innerHTML = `
            ${isRegister ? `
                ${Navigation()}
                <section class="course-presentation">
                    ${Course(state)}
                </section>
            ` : `
                <h1>Please Registrate!</h1>
            `}
        `;

    const registeredLink = document.querySelector('.registered');

    if (!registeredLink) return;
    registeredLink.addEventListener('click', logOut);
};

export default CreateCourse;