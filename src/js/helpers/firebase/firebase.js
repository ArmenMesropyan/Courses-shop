import cookieActions from '../cookie';

const firebaseConfig = {
    apiKey: 'AIzaSyAXRcPggI2MT7dWR20qT0dExs1iirpXJyg',
    authDomain: 'courses-shop-ab326.firebaseapp.com',
    databaseURL: 'https://courses-shop-ab326.firebaseio.com',
    projectId: 'courses-shop-ab326',
    storageBucket: 'courses-shop-ab326.appspot.com',
    messagingSenderId: '689418990840',
    appId: '1:689418990840:web:1571d12b2218f9ba90f70d',
};

window.firebase.initializeApp(firebaseConfig);

const database = window.firebase.database();

class Firebase {
    constructor() {
        this.state = {
            currentValue: null,
        };
        this.courses = database.ref('/courses');
        this.count = 0;
    }

    setCourse(data) {
        const user = cookieActions.getCookie('googleAuthId');
        if (!user) return;

        this.currentValue = data;
        const courseId = this.courses.push().key;

        this.courses.child(courseId).set(data);
    }

    getCourses(cb) {
        this.courses.orderByKey().on('value', (data) => {
            cb(data.val());
        });
    }

    deleteCourse(id) {
        this.courses.child(id).remove();
    }
}

const firebaseActions = new Firebase();

export { firebaseConfig, firebaseActions };