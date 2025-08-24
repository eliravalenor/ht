
window.addEventListener('load', function() {
    const authOverlay = document.getElementById('auth-overlay');
    const phoneScreen = document.getElementById('phone-screen');

    if (authOverlay && phoneScreen) {
        authOverlay.classList.add('hidden');
        phoneScreen.classList.remove('hidden');
    }
});
