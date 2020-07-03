const Course = ({
    image,
    name,
    description,
    download,
    link,
} = {}) => `
    <div class="card">
        <div class="courses__img card-image">
            <img src="${image || ''}">
        </div>
        <div class="courses__content card-content">
            <h3 class="courses__name card-title">${name || 'Empty Name'}</h3>
            <p class="courses__desc">${description || 'Empty Description'}</p>
            <a href="${download}" target="_blank" class="courses__download">Download this course</a>
        </div>
        <div class="card-action">
            <a href="${link}" target="_blank" class="courses__link">More about this course</a>
        </div>
    </div>
`;

export default Course;