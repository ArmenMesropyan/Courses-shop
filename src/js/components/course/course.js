const Course = ({
    image,
    name,
    description,
    price,
} = {}) => `
    <div class="card">
        <div class="courses__img card-image">
            <img src="${image || ''}">
        </div>
        <div class="courses__content card-content">
            <h3 class="courses__name card-title">${name || 'Empty Name'}</h3>
            <p class="courses__desc">${description || 'Empty Description'}</p>
            <span class="courses__price">${price || 0}</span>
        </div>
        <div class="card-action">
            <a href="#" class="courses__link">More about this course</a>
        </div>
    </div>
`;

export default Course;