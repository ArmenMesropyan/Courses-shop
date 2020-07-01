import './navigation.css';

function logOut(e) {
    e.preventDefault();
    localStorage.removeItem('googleAuthId');
    location.reload();
}

const Navigation = () => {
    const isRegister = localStorage.getItem('googleAuthId');

    return `
        <nav class="main-nav grey darken-2">
            <div class="container">
                <div class="nav-wrapper">
                    <a href="#" class="main-nav__logo brand-logo">Courses Shop</a>
                    <ul id="nav-mobile" class="right">
                        <li>
                            <a class="${isRegister ? 'registered' : ''}" href="${!isRegister ? '/authentication' : ''}">${isRegister ? 'Log Out' : 'Log In'}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
};

export { Navigation, logOut };