/* eslint-disable no-undef */
import cookieActions from '../cookie';
import '../firebase';

const googleSign = () => {
    const baseProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(baseProvider)
        .then((res) => {
            cookieActions.setCookie('googleAuthId', res.user.uid, 30);
            location.replace('/courses');
        })
        .catch((error) => {
            console.log(error);
        });
};

export default googleSign;