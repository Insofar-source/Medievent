window.addEventListener("DOMContentLoaded", function() {
    // Retrieve data from localStorage
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const mobile = localStorage.getItem("phone");
    const registrationType = localStorage.getItem("registartion_type");
    const nameone = name;

    
    document.getElementById("displayNameone").textContent = nameone;
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayMobile").textContent = mobile;
    document.getElementById("displayRegistrationType").textContent = registrationType;
});