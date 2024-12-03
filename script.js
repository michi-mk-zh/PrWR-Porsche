document.addEventListener('DOMContentLoaded', function () {
    // Dropdown 1
    const menuButton1 = document.getElementById('menu-button-1');
    const menu1 = document.getElementById('menu-1');

    // Dropdown 2
    const menuButton2 = document.getElementById('menu-button-2');
    const menu2 = document.getElementById('menu-2');

    function setupDropdown(button, menu) {
        // Toggle visibility on button click
        button.addEventListener('click', function () {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
            menu.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (event) {
            if (!button.contains(event.target) && !menu.contains(event.target)) {
                button.setAttribute('aria-expanded', 'false');
                menu.classList.add('hidden');
            }
        });

        // Close dropdown on menu item click
        menu.querySelectorAll('[role="menuitem"]').forEach(item => {
            item.addEventListener('click', function () {
                button.setAttribute('aria-expanded', 'false');
                menu.classList.add('hidden');
            });
        });
    }

    // Setup both dropdowns
    setupDropdown(menuButton1, menu1);
    setupDropdown(menuButton2, menu2);
});