import { cookieActions } from '..';
import { Course } from '../../components';

function generateInputs(cb, buttonText = 'Add Button') {
    const courseName = document.getElementById('course_name');
    const courseDownload = document.getElementById('course_download');
    const courseDesc = document.getElementById('course_desc');
    const courseImage = document.getElementById('course_image');
    const courseLink = document.getElementById('course_link');

    const validateInputs = ({ name, price, link }) => {
        const regExp = {
            name: /^[a-zA-Z ]{2,30}$/,
            link: /(https?:\/\/[^\s]+)/g,
            download: /(https?:\/\/[^\s]+)/g,
        };

        const inputs = { name, price, link };

        const isValid = Object.entries(inputs).every(([key, value]) => regExp[key].test(value));

        if (!isValid) return '<p>Invalid course</p>';

        return `
            <button class="course-presentation__btn btn waves-effect waves-light" type="button" name="action">${buttonText}</button>
        `;
    };

    const changeState = () => {
        const currentState = {
            image: courseImage.value,
            name: courseName.value,
            description: courseDesc.value,
            download: courseDownload.value,
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
                location.replace('/');
                cb(currentState);
            });
        }
    };

    changeState();

    courseName.addEventListener('input', changeState);
    courseDownload.addEventListener('input', changeState);
    courseDesc.addEventListener('input', changeState);
    courseImage.addEventListener('input', changeState);
    courseLink.addEventListener('input', changeState);
}

export default generateInputs;