/**
 * NovaDash Admin Panel - Theme Handler
 * Handles Light/Dark mode toggling and persistence
 */

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.setAttribute('data-theme', 'dark');
    if (themeToggleBtn) updateIcon(true);
} else {
    body.setAttribute('data-theme', 'light');
    if (themeToggleBtn) updateIcon(false);
}

// Toggle Theme Function
function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    updateIcon(newTheme === 'dark');
}

function updateIcon(isDark) {
    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector('i');
    if (isDark) {
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
    } else {
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
    }
}

// Event Listener
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
    // Initialize icon state
    const isDark = body.getAttribute('data-theme') === 'dark';
    updateIcon(isDark);
}
