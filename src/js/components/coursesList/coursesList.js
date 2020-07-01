const CoursesList = (courses) => {
    const user = localStorage.getItem('googleAuthId');
    console.log('user: ', user);
    const res = courses.map(({ description, name, price }) => `
        <div>
            <h2>${name}</h2>
            <p>${description}</p>
            <span>${price}</span>
        </div>
    `);
    return res;
};

export default CoursesList;