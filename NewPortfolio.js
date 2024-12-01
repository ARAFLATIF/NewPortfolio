document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌓 Toggle Theme';
    darkModeToggle.id = 'darkModeToggle';
    darkModeToggle.classList.add('btn', 'btn-outline-secondary');
    document.body.appendChild(darkModeToggle);

    function updateTheme(isDark) {
        document.body.classList.toggle('dark-mode', isDark);
        darkModeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    }

    darkModeToggle.addEventListener('click', function() {
        const isDark = !document.body.classList.contains('dark-mode');
        updateTheme(isDark);
        localStorage.setItem('darkMode', isDark);
    });

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    updateTheme(savedDarkMode);
});