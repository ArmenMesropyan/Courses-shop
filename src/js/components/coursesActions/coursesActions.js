import './coursesActions.css';

const CoursesActions = (courses) => courses.map(({ name, image, price }) => `
    <li class="courses-actions__item">
        <a href="#" class="courses-actions__name collection-item">
            <img class="courses-actions__img" src="${image}"/>
            ${name}
            <div class="courses-actions__right badge">
                ${price}
                <button clas="courses-actions__delete">Delete</button>
            </div>
        </a>
    </li>
`);

export default CoursesActions;