// Function to show the relevant resource tab content
function showTab(tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Show selected tab content
    document.getElementById(tabName).style.display = 'block';
}

// Default tab to show on load
document.addEventListener('DOMContentLoaded', () => {
    showTab('youtube');
});
