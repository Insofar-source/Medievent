// Select the info icon and popup elements
const infoIcon = document.getElementById('infoIcon');
const infoPopup = document.getElementById('infoPopup');

// Toggle popup on icon click
infoIcon.addEventListener('click', function (event) {
    infoPopup.classList.toggle('active');
    event.stopPropagation(); // Prevent event from bubbling up
});

// Close popup when clicking outside
document.addEventListener('click', function (event) {
    if (!infoPopup.contains(event.target) && !infoIcon.contains(event.target)) {
        infoPopup.classList.remove('active');
    }
});