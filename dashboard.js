// dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    const dashboardStream = document.getElementById('dashboard-stream');
    const dashboardInterests = document.getElementById('dashboard-interests');
    const clearDataButton = document.getElementById('clear-dashboard-data');

    function loadDashboardData() {
        const userStream = localStorage.getItem('userStream');
        const userInterests = JSON.parse(localStorage.getItem('userInterests') || '[]');

        if (dashboardStream) {
            dashboardStream.textContent = userStream || 'Not set yet';
        }

        if (dashboardInterests) {
            if (userInterests.length > 0) {
                dashboardInterests.textContent = userInterests.join(', ');
            } else {
                dashboardInterests.textContent = 'No interests saved yet';
            }
        }
    }

    function clearDashboardData() {
        localStorage.removeItem('userStream');
        localStorage.removeItem('userInterests');
        alert('Your dashboard data has been cleared.');
        loadDashboardData(); // Reload to show cleared state
    }

    // Load data when the dashboard page loads
    loadDashboardData();

    // Event listener for clear data button
    if (clearDataButton) {
        clearDataButton.addEventListener('click', clearDashboardData);
    }
});
