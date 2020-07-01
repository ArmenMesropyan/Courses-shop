import './navigation.css';

const Navigation = () => {
    const isRegister = localStorage.getItem('googleAuthId');
    let text;
    if (isRegister) text = 'Log Out';
    else text = 'Log In';

    return `
        <nav class="main-nav">
            <div class="nav-wrapper grey darken-2">
                <a href="#" class="main-nav__logo brand-logo">Courses Shop</a>
                <ul id="nav-mobile" class="right">
                    <li><a href="/authentication" onclick=onLinkClick>${text}</a></li>
                </ul>
            </div>
        </nav>
    `;
};

export default Navigation;