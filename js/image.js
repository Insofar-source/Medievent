function previewImage(event) {
    const preview = document.getElementById('preview');
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) { // Check if file is an image
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block'; // Display the image
        };
        reader.readAsDataURL(file); // Read the image as a data URL
    } else {
        preview.style.display = 'none'; // Hide preview if not an image
        alert("Please upload a valid image file."); // Optional: alert for invalid files
    }
}