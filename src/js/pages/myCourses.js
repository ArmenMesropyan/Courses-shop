import {
    Navigation,
    logOut,
    Course,
    CreateInputs,
    CoursesActions,
} from '../components';

const MyCourse = () => {
        const isRegister = localStorage.getItem('googleAuthId');

        document.getElementById('root').innerHTML = `
            ${isRegister ? `
                ${Navigation()}
                ${CoursesActions()}
            ` : `
                <h1>Please Registrate!</h1>
            `}
        `;

    const registeredLink = document.querySelector('.registered');

    if (!registeredLink) return;
    registeredLink.addEventListener('click', logOut);
};

export default MyCourse;