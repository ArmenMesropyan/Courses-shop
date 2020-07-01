import './courses.css';
import { Navigation } from '../components';

const Courses = () => {
    const isRegister = localStorage.getItem('googleAuthId');
    let text;
    if (isRegister) text = 'Log Out';
    else text = 'Log In';

    document.getElementById('root').innerHTML = `
        ${Navigation(text)}
    `;
};

export default Courses;