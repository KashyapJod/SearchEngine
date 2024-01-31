// Function to update the time
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    // Format the time as you want (e.g., 12-hour format with AM/PM)
    const formattedTime = `${hours}:${minutes}`;

    // Update the content of the time widget
    document.getElementById('time-widget').textContent = formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to set the time when the page loads
updateTime();
