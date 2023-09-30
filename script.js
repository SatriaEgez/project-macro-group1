document.querySelector('.sidebar ul').addEventListener('click', function(event) {
    // Close sidebar when a link is clicked (for mobile devices)
    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar').classList.remove('active');
    }
});

document.querySelector('.sidebar h2').addEventListener('click', function() {
    // Toggle sidebar when the h2 element is clicked (for desktop)
    document.querySelector('.sidebar').classList.toggle('active');
});
