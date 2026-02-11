// Update last updated time
function updateLastUpdatedTime() {
    const img = document.getElementById('rosterImage');
    const lastUpdatedSpan = document.getElementById('lastUpdated');
    
    // Get image last modified time
    fetch('roster.png', { method: 'HEAD' })
        .then(response => {
            const lastModified = response.headers.get('last-modified');
            if (lastModified) {
                const date = new Date(lastModified);
                lastUpdatedSpan.textContent = formatDate(date);
            } else {
                lastUpdatedSpan.textContent = 'Unknown';
            }
        })
        .catch(() => {
            lastUpdatedSpan.textContent = 'Unknown';
        });
}

// Format date to readable format
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
}

// Show no roster message if image fails to load
function showNoRoster() {
    document.getElementById('rosterImage').style.display = 'none';
    document.getElementById('noRoster').style.display = 'block';
}

// Download roster image
function downloadRoster() {
    const img = document.getElementById('rosterImage');
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'shift-roster.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Refresh roster image
function refreshRoster() {
    const img = document.getElementById('rosterImage');
    const timestamp = new Date().getTime();
    img.src = 'roster.png?t=' + timestamp;
    
    // Show loading feedback
    img.style.opacity = '0.5';
    setTimeout(() => {
        img.style.opacity = '1';
        updateLastUpdatedTime();
    }, 500);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLastUpdatedTime();
    
    // Check if image exists
    const img = document.getElementById('rosterImage');
    img.onload = () => {
        document.getElementById('noRoster').style.display = 'none';
        img.style.display = 'block';
    };
});

