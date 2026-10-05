document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const icon = themeToggleBtn.querySelector('i');
    
    // Check local storage or system preferences for initial theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply the initial theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-color-scheme', 'dark');
        icon.className = 'fas fa-sun';
    } else {
        document.documentElement.setAttribute('data-color-scheme', 'light');
        icon.className = 'fas fa-moon';
    }
    
    // Listen for button clicks to toggle the theme
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme');
        
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-color-scheme', 'light');
            localStorage.setItem('portfolio-theme', 'light');
            icon.className = 'fas fa-moon'; // Change icon to moon for light mode
        } else {
            document.documentElement.setAttribute('data-color-scheme', 'dark');
            localStorage.setItem('portfolio-theme', 'dark');
            icon.className = 'fas fa-sun'; // Change icon to sun for dark mode
        }
    });
});