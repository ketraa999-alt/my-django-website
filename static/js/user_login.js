document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form') || document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const loginError = document.getElementById('login-error');
            if (loginError) loginError.style.display = 'none';

            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
            const user = registeredUsers.find(u => u.email === email);
            if (user && user.password === password) {
                window.location.href = '/user_dashboard/';
            } else {
                if (loginError) loginError.style.display = 'block';
            }
        });
    }
});