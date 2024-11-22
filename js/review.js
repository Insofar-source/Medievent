function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file && file.type.startsWith("image/")) {
        reader.onload = function(e) {
            const preview = document.getElementById('reviewPhoto');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

function showReview() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const photo = document.getElementById("reviewPhoto").src;

    // Populate review modal
    document.getElementById("reviewName").innerText = name;
    document.getElementById("reviewEmail").innerText = email;

    // Show the modal
    document.getElementById("reviewModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("reviewModal").style.display = "none";
}