 function toggleTheme() {
            const html = document.documentElement;
            const themeToggle = document.querySelector('.theme-toggle');
            const themeIcon = document.querySelector('.theme-icon');
            const themeText = document.querySelector('.theme-text');
            
            // Check current theme
            const currentTheme = html.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                // Switch to light mode
                html.removeAttribute('data-theme');
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Dark';
            } else {
                // Switch to dark mode
                html.setAttribute('data-theme', 'dark');
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Light';
            }
        }

        // Optional: Remember user's theme preference
        function initializeTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
                document.querySelector('.theme-icon').textContent = '☀️';
                document.querySelector('.theme-text').textContent = 'Light';
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
            const themeIcon = document.querySelector('.theme-icon');
            const themeText = document.querySelector('.theme-text');
            
            const currentTheme = html.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                html.removeAttribute('data-theme');
                themeIcon.textContent = '🌙';
                themeText.textContent = 'Dark';
            } else {
                html.setAttribute('data-theme', 'dark');
                themeIcon.textContent = '☀️';
                themeText.textContent = 'Light';
            }
            
            // Save the preference
            saveThemePreference();
        }

        // Initialize theme on page load
        document.addEventListener('DOMContentLoaded', initializeTheme);
