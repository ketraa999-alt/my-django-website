document.addEventListener('DOMContentLoaded', function () {
    // Current Date
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = new Date().toLocaleDateString('en-US', options);
    }

    // Navigation Handling
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.dashboard-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Highlight the corresponding section
            const targetId = this.getAttribute('href').substring(1);

            // Implementing basic section switching
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            // Update header title based on section
            const headerTitle = document.querySelector('.welcome-text h1');
            if (headerTitle) {
                if (targetId === 'dashboard') {
                    headerTitle.textContent = 'Trainer Dashboard';
                } else if (targetId === 'clients') {
                    headerTitle.textContent = 'My Clients';
                } else if (targetId === 'schedule') {
                    headerTitle.textContent = 'Weekly Schedule';
                } else if (targetId === 'workouts') {
                    headerTitle.textContent = 'Workout Plans';
                } else if (targetId === 'earnings') {
                    headerTitle.textContent = 'Earnings & Payments';
                } else if (targetId === 'settings') {
                    headerTitle.textContent = 'Settings';
                }
            }
        });
    });

    // Profile Header Click
    const profileHeader = document.querySelector('.user-profile');
    if (profileHeader) {
        profileHeader.addEventListener('click', function () {
            // Activate the settings section (where profile is located)
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === 'settings') {
                    section.classList.add('active');
                }
            });

            // Update Sidebar Active State
            navLinks.forEach(l => {
                l.classList.remove('active');
                if (l.getAttribute('href') === '#settings') {
                    l.classList.add('active');
                }
            });

            // Update Header Title
            const headerTitle = document.querySelector('.welcome-text h1');
            if (headerTitle) {
                headerTitle.textContent = 'Settings';
            }
        });
    }

    // Logout
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = '../login/trainer_login.html';
            }
        });
    }

    // Earnings Chart Visualization (Mock)
    if (document.getElementById('earningsChart')) {
        const ctx = document.getElementById('earningsChart').getContext('2d');

        // Background
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, 800, 300);

        // Grid lines
        ctx.beginPath();
        for (let i = 1; i < 5; i++) {
            ctx.moveTo(0, i * 60);
            ctx.lineTo(800, i * 60);
        }
        ctx.strokeStyle = '#e2e8f0';
        ctx.stroke();

        ctx.font = '14px Inter';
        ctx.fillStyle = '#64748b';
        ctx.fillText('Monthly Earnings Overview', 10, 20);

        // Bar Chart Mock
        const barWidth = 40;
        const spacing = 30;
        let x = 50;

        // Mock data
        const data = [150, 220, 180, 240, 280, 260];

        ctx.fillStyle = '#667eea';
        data.forEach((height) => {
            ctx.fillRect(x, 300 - height, barWidth, height);
            x += barWidth + spacing;
        });
    }
});
