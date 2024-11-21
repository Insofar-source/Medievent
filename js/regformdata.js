document.getElementById("prefilledForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from submitting traditionally

    // Get form field values
    const name = document.getElementById("firstname").value;
    const mobile = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const registrationType = document.getElementById("registartion type").value;

    // Store data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("phone", mobile);
    localStorage.setItem("email", email);
    localStorage.setItem("registartion_type", registrationType);

    // Redirect to dashboard
    window.location.href = "Dashboard.html";
});
