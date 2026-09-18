document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('trainer-login-form') || document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const loginError = document.getElementById('login-error');
            if (loginError) loginError.style.display = 'none';

            const registeredTrainers = JSON.parse(localStorage.getItem('registeredTrainers')) || [];
            const trainer = registeredTrainers.find(t => t.email === email);
            if (trainer && trainer.password === password) {
                window.location.href = '../trainer_dashboard/trainer_dashboard.html';
            } else {
                if (loginError) loginError.style.display = 'block';
            }
        });
    }
}); 