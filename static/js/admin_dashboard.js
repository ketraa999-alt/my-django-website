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

            // Section switching
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
                    headerTitle.textContent = 'Admin Dashboard';
                } else if (targetId === 'users') {
                    headerTitle.textContent = 'User Management';
                } else if (targetId === 'trainers') {
                    headerTitle.textContent = 'Trainer Management';
                } else if (targetId === 'financials') {
                    headerTitle.textContent = 'Financial Overview';
                } else if (targetId === 'reports') {
                    headerTitle.textContent = 'System Reports';
                } else if (targetId === 'settings') {
                    headerTitle.textContent = 'System Settings';
                }
            }
        });
    });

    // Profile Header Click
    const profileHeader = document.querySelector('.user-profile');
    if (profileHeader) {
        profileHeader.addEventListener('click', function () {
            // Activate the settings section
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
                headerTitle.textContent = 'System Settings';
            }
        });
    }

    // Logout
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = '../login/admin_login.html';
            }
        });
    }

    // Chart Initialization (Mock)
    if (document.getElementById('revenueChart')) {
        const ctx = document.getElementById('revenueChart').getContext('2d');

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
        ctx.fillText('Monthly Revenue Growth', 10, 20);

        // Line Chart Mock (Revenue)
        ctx.beginPath();
        ctx.moveTo(50, 250);
        ctx.lineTo(150, 220); // Jan
        ctx.lineTo(250, 240); // Feb
        ctx.lineTo(350, 180); // Mar
        ctx.lineTo(450, 150); // Apr
        ctx.lineTo(550, 120); // May
        ctx.lineTo(650, 80);  // Jun

        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 3;
        ctx.stroke();
    }
});
