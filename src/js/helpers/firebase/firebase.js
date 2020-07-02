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
        const user = localStorage.getItem('googleAuthId');
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
}

const firebaseActions = new Firebase();

// myFirebase.setValue({
//     name: 'JS',
//     price: '1000',
//     description: 'JS Description',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
//     user: 'J1uZWhRCH9NIHg7gI3mmI3Ufk2G2',
// });

// myFirebase.updateValue({
//     name: 'JAVA',
//     price: '1000',
//     description: 'JS Description',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
//     user: 'J1uZWhRCH9NIHg7gI3mmI3Ufk2G2',
// });

export { firebaseConfig, firebaseActions };