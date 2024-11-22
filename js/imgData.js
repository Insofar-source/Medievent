// Fetch stored data from localStorage

const uploadedImage = localStorage.getItem('uploadedImage');



// Display the uploaded image if available
if (uploadedImage) {
    const imgElement = document.getElementById('displayImage');
    imgElement.src = uploadedImage;
    imgElement.style.display = 'block';
}