import './navigation.css';

const Navigation = (text) => `
    <nav class="main-nav">
        <div class="nav-wrapper grey darken-2">
            <a href="#" class="brand-logo">Courses Shop</a>
            <ul id="nav-mobile" class="right">
                <li><a href="/authentication" onclick=onLinkClick>${text}</a></li>
            </ul>
        </div>
    </nav>
`;

export default Navigation;