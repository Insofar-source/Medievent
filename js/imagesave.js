 // Function to preview the uploaded image
 function previewImage(event) {
    const preview = document.getElementById('preview');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            // Store the image data in localStorage
            localStorage.setItem('uploadedImage', e.target.result);
        };
        reader.readAsDataURL(file);
    }
}

// Function to save form data on submission
function saveFormData(event) {
    event.preventDefault();
    const name = document.getElementById('firstname').value;
    const registrationType = document.getElementById('registrationType').value;

    // Save form data to localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('registrationType', registrationType);

    // Redirect to the next page
    window.location.href = 'display.html';
}