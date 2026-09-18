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

            // In a real app, this would show/hide sections
            // For now, we'll just log navigation or show alert if not implemented
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
                    headerTitle.textContent = 'Welcome back, User!';
                } else if (targetId === 'profile') {
                    headerTitle.textContent = 'My Profile';
                } else if (targetId === 'workouts') {
                    headerTitle.textContent = 'My Workouts';
                } else if (targetId === 'diet') {
                    headerTitle.textContent = 'Diet Plan';
                } else if (targetId === 'progress') {
                    headerTitle.textContent = 'My Progress';
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
            // Activate the profile section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === 'profile') {
                    section.classList.add('active');
                }
            });

            // Update Sidebar Active State
            navLinks.forEach(l => {
                l.classList.remove('active');
                if (l.getAttribute('href') === '#profile') {
                    l.classList.add('active');
                }
            });

            // Update Header Title
            const headerTitle = document.querySelector('.welcome-text h1');
            if (headerTitle) {
                headerTitle.textContent = 'My Profile';
            }
        });
    }

    // Workout Start Buttons
    const startButtons = document.querySelectorAll('.workout-action');
    startButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            alert('Starting workout session...');
        });
    });

    // Logout
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = '/user_login';
            }
        });
    }

    // Initialize Chart
    if (document.getElementById('progressChart')) {
        // Mock chart creation - in real app use Chart.js
        const ctx = document.getElementById('progressChart').getContext('2d');
        // Simple canvas drawing as placeholder since we can't load external libraries easily here without CDN
        ctx.fillStyle = '#f8f9fa';
        ctx.fillRect(0, 0, 800, 300);

        ctx.beginPath();
        ctx.moveTo(0, 250);
        ctx.lineTo(800, 250);
        ctx.strokeStyle = '#e2e8f0';
        ctx.stroke();

        ctx.font = '14px Inter';
        ctx.fillStyle = '#64748b';
        ctx.fillText('Weight Tracking (Last 6 Months)', 10, 20);

        // Draw dummy line
        ctx.beginPath();
        ctx.moveTo(50, 200);
        ctx.lineTo(150, 190);
        ctx.lineTo(250, 195);
        ctx.lineTo(350, 180);
        ctx.lineTo(450, 175);
        ctx.lineTo(550, 170);
        ctx.lineTo(650, 168);
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 3;
        ctx.stroke();
    }
});
