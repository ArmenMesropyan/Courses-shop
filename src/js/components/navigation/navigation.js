import './navigation.css';

function logOut(e) {
    e.preventDefault();
    localStorage.removeItem('googleAuthId');
    location.replace('/');
}

const Navigation = () => {
        const isRegister = localStorage.getItem('googleAuthId');

        return `
        <nav class="main-nav grey darken-2">
            <div class="container">
                <div class="nav-wrapper">
                    <a href="/" class="main-nav__logo brand-logo">Courses Shop</a>
                    <ul id="nav-mobile" class="right">
                        ${isRegister ? `
                            <li>
                                <a href="/my-courses">My Courses</a>
                            </li>
                            <li>
                                <a href="/create-course">Create Course</a>
                            </li>
                            <li>
                                <a class="registered">Log Out</a>
                            </li>
                        ` : `
                            <li>
                                <a href="/authentication">Log In</a>
                            </li>
                        `}
                    </ul>
                </div>
            </div>
        </nav>
    `;
};

export { Navigation, logOut };