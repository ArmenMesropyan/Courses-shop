import './coursesList.css';

const CoursesList = (courses) => {
    const user = localStorage.getItem('googleAuthId');
    console.log('user: ', user);
    const res = courses.map(({
        description,
        name,
        price,
        image,
    }) => `
        <li class="courses__item card">
            <div class="courses__img card-image">
                <img src="${image}">
            </div>
            <div class="courses__content card-content">
                <h3 class="courses__name card-title">${name}</h3>
                <p class="courses__desc">${description}</p>
                <span class="courses__price">${price}</span>
            </div>
            <div class="card-action">
                <a href="#" class="courses__link">More about this course</a>
            </div>
        </li>
    `);
    return `
        <section class="courses">
            <div class="container">
                <ul class="courses__list">
                    ${res}
                </ul>
            </div>
        </section>
    `;
};

export default CoursesList;