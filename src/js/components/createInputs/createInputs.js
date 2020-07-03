const CreateInputs = () => `
        <div class="input-field">
            <input placeholder="Course Name" id="course_name" type="text">
            <label for="course_name" class="visually-hidden">Course Name</label>
        </div>
        <div class="input-field">
            <input placeholder="Course Price" id="course_price" type="number">
            <label for="course_price" class="visually-hidden">Course Price</label>
        </div>
        <div class="input-field">
            <input placeholder="Course Image" id="course_image" type="text">
            <label for="course_image" class="visually-hidden">Course Image</label>
        </div>
        <div class="input-field">
            <textarea placeholder="Course Description" id="course_desc" class="materialize-textarea"></textarea>
            <label for="course_desc" class="visually-hidden">Course Description</label>
        </div>
        <div class="input-field">
            <input placeholder="Course Link" id="course_link" type="text">
            <label for="course_link" class="visually-hidden">Course Link</label>
        </div>
    `;

export default CreateInputs;