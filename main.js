window.onload = function() {
    const checkbox = document.getElementById('menu-toggle');
    const menuMobile = document.getElementById('menuMobile');

    checkbox.addEventListener('change', function() {
    if (this.checked) {
        // Checkbox is checked
        menuMobile.style.display = 'inline';
    } else {
        // Checkbox is unchecked
        menuMobile.style.display = 'none';
    }
    });
};