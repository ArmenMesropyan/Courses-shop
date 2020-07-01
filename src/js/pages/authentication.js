import { GoogleIcon } from '../components';
import { googleSign } from '../helpers';
import './authentication.css';

const Authentication = () => {
    document.getElementById('root').innerHTML = `
        <section class="user">
            <div class="user_options-container">
                <div class="user_options-text">
                    <div class="user_options-unregistered">
                        <h2 class="user_unregistered-title">Check our project information!</h2>
                        <p class="user_unregistered-text">
                            Create your courses and share them with people!
                        </p>
                        <button class="user_unregistered-signup" id="signup-button">About Us</button>
                    </div>
            
                    <div class="user_options-registered">
                        <h2 class="user_registered-title">Don't have an account?</h2>
                        <p class="user_registered-text">
                            Registrate for creating your courses and share them with people!
                        </p>
                        <button class="user_registered-login" id="login-button">Sign up</button>
                    </div>
                </div>
                
                <div class="user_options-forms" id="user_options-forms">
                    <div class="user_forms-login">
                        <h2 class="forms_title">Login</h2>
                        <form class="forms_form forms_form-login">
                            ${GoogleIcon()}
                        </form>
                    </div>
                    <div class="user_forms-about">
                        <h2 class="forms_title forms_form-about">About Us</h2>
                        <div class="about-information forms_form">
                            Information about us.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    const signupButton = document.getElementById('signup-button');
    const loginButton = document.getElementById('login-button');
    const userForms = document.getElementById('user_options-forms');
    const googleAuthBtn = document.getElementById('google-sign');

    googleAuthBtn.addEventListener('click', () => {
        googleSign();
    });


    signupButton.addEventListener('click', () => {
        userForms.classList.remove('bounceRight');
        userForms.classList.add('bounceLeft');
    }, false);


    loginButton.addEventListener('click', () => {
        userForms.classList.remove('bounceLeft');
        userForms.classList.add('bounceRight');
    }, false);
};

export default Authentication;