// Disable right click 
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// For Toogle Menu in Mobile devices 
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

// For active indication in nav menu 
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('#navMenu a');

    tabs.forEach(tab => {
        tab.addEventListener('click', function(event) {
            // Prevent the default action of the anchor tag
            event.preventDefault();

            // Remove the 'active' and 'highlight' classes from all tabs
            tabs.forEach(t => {
                t.classList.remove('active');
                t.classList.remove('highlight');
            });

            // Add the 'active' class to the clicked tab
            this.classList.add('active');
            
            // Add the 'highlight' class to the clicked tab if it's not the home tab
            if (this.id !== 'homeTab') {
                this.classList.add('highlight');
            }

            // Navigate to the section
            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});





