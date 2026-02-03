//FOR responsive: menu==========
function openNav() {
    document.getElementById("curtain-menu").classList.add("curtain-menu--open");
}

function closeNav() {
    document.getElementById("curtain-menu").classList.remove("curtain-menu--open");
}

//FOR theme===========
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('.theme-toggle__icon').textContent = '\u{2728}';
        // document.querySelector('.theme-text').textContent = 'Light';
    }
}

// Save theme preference when changed
function saveThemePreference() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    localStorage.setItem('theme', currentTheme || 'light');
}

// Update the toggleTheme function to save preference
function toggleTheme() {
    const html = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-toggle__icon');
    // const themeText = document.querySelector('.theme-text');

    // const themeText = document.querySelector('.theme-text');

    const currentTheme = html.getAttribute('data-theme');

    if (currentTheme == 'dark') {
        html.removeAttribute('data-theme');
        themeIcon.textContent = '\u{1F319}';
        // themeText.textContent = 'Dark';
    } else {
        html.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '\u{2728}';
        // themeText.textContent = 'Light';
    }

    // Save the preference
    saveThemePreference();
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);