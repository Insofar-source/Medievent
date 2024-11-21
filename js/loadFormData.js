window.addEventListener("load", function() {
    // Retrieve values from localStorage and populate the form fields
    document.getElementById("firstname").value = localStorage.getItem("firstname") || "";
    document.getElementById("registartion type").value = localStorage.getItem("registartion type") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("phone").value = localStorage.getItem("phone") || "";
});

