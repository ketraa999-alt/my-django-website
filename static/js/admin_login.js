document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('admin-login-form') || document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const loginError = document.getElementById('login-error');
            if (loginError) loginError.style.display = 'none';

            const registeredAdmins = JSON.parse(localStorage.getItem('registeredAdmins')) || [];
            const admin = registeredAdmins.find(a => a.email === email);
            if (admin && admin.password === password) {
                window.location.href = '../admin_dashboard/admin_dashboard.html';
            } else {
                if (loginError) loginError.style.display = 'block';
            }
        });
    }
}); 