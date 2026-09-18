document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();
            const passwordInput = document.getElementById('password');
            const password = passwordInput.value;
            const confirmInput = document.getElementById('confirm-password');
            const confirmPassword = confirmInput ? confirmInput.value : null;
            const successMessage = document.getElementById('success-message');
            const errorMessage = document.getElementById('error-message');
            const passwordError = document.getElementById('password-error');

            // Reset messages
            if (successMessage) successMessage.style.display = 'none';
            if (errorMessage) errorMessage.style.display = 'none';
            if (passwordError) passwordError.style.display = 'none';

            // Password exact length validation
            if (password.length !== 8) {
                if (passwordError) {
                    passwordError.textContent = 'Password must be exactly 8 characters.';
                    passwordError.style.display = 'block';
                }
                return;
            }

            // Confirm password (if present)
            if (confirmPassword !== null && password !== confirmPassword) {
                if (passwordError) {
                    passwordError.textContent = 'Passwords do not match.';
                    passwordError.style.display = 'block';
                }
                return;
            }

            // Get existing users from localStorage
            let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

            if (registeredUsers.some(u => u.email === email)) {
                if (errorMessage) {
                    errorMessage.style.display = 'block';
                }
            } else {
                // Add new user
                registeredUsers.push({ email: email, password: password });
                localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

                // Keep legacy email list for compatibility
                let registeredEmails = JSON.parse(localStorage.getItem('registeredEmails')) || [];
                if (!registeredEmails.includes(email)) {
                    registeredEmails.push(email);
                    localStorage.setItem('registeredEmails', JSON.stringify(registeredEmails));
                }

                if (successMessage) {
                    successMessage.style.display = 'block';
                }
                setTimeout(function () {
                    window.location.href = '/user_login/';
                }, 2000);
            }
        });
    }
});
