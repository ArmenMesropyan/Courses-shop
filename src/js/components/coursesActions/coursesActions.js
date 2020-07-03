import './coursesActions.css';

const CoursesActions = (courses) => courses.map(([key, { name, image }]) => `
    <li class="courses-actions__item">
        <a href="/change-course*${key}" class="courses-actions__name collection-item">
            <img class="courses-actions__img" src="${image}"/>
            ${name}
            <div class="courses-actions__right badge">
                <button class="courses-actions__delete" data-key="${key}">Delete</button>
            </div>
        </a>
    </li>
`);

export default CoursesActions;