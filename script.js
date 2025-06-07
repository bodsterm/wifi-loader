function checkConnection() {
    const wifiList = document.getElementById('wifi-list');
    wifiList.innerHTML = ''; // Clear previous entries

    // Simulate Wi-Fi information (since we can't access real SSID/password)
    const wifiName = 'SampleWiFi';
    const wifiPassword = '********'; // Placeholder, as passwords can't be retrieved

    // Create list item for Wi-Fi details
    const listItem = document.createElement('li');
    listItem.textContent = `Wi-Fi Name: ${wifiName} | Password: ${wifiPassword}`;
    wifiList.appendChild(listItem);

    // Check network status using NetworkInformation API (if available)
    if (navigator.connection) {
        const connection = navigator.connection;
        const statusItem = document.createElement('li');
        statusItem.textContent = `Connection Type: ${connection.type || 'Unknown'}`;
        wifiList.appendChild(statusItem);
    } else {
        const statusItem = document.createElement('li');
        statusItem.textContent = 'Network information not available';
        wifiList.appendChild(statusItem);
    }
}
