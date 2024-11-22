document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Store each field's value in localStorage
    localStorage.setItem("title", document.getElementById("title").value);
    localStorage.setItem("firstname", document.getElementById("firstname").value);
    localStorage.setItem("email", document.getElementById("email").value);
    localStorage.setItem("phone", document.getElementById("phone").value);

    // Clear the form
    this.reset();

    // Redirect to the next page
    window.location.href = "register.html";
});
