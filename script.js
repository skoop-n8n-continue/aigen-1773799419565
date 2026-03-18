function getOrdinalSuffix(i) {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

function updateClock() {
    const now = new Date();

    // Format Date: "March 17th, 2026"
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = months[now.getMonth()];
    const dateNum = now.getDate();
    const year = now.getFullYear();
    const dateString = `${month} ${getOrdinalSuffix(dateNum)}, ${year}`;

    // Format Time: "1:34:53 PM"
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    // Update DOM
    document.getElementById('dateDisplay').textContent = dateString;
    document.getElementById('timeDisplay').textContent = timeString;
}

// Initial call to avoid flash of loading text
updateClock();

// Update every second
setInterval(updateClock, 1000);