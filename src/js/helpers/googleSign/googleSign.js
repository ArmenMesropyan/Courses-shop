/* eslint-disable no-undef */
import '../firebase';

const googleSign = () => {
    const baseProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(baseProvider)
        .then((res) => {
            localStorage.setItem('googleAuthId', res.user.uid);
            location.replace('/courses');
        })
        .catch((error) => {
            console.log(error);
        });
};

export default googleSign;