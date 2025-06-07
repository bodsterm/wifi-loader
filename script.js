document.getElementById('loadWifiBtn').addEventListener('click', function() {
    // Mock Wi-Fi data (since browsers can't access real Wi-Fi info)
    const wifiNetworks = [
        { ssid: "HomeWiFi", password: "12345678" },
        { ssid: "CoffeeShop", password: null },
        { ssid: "GuestNetwork", password: "welcome123" },
        { ssid: "OfficeWiFi", password: null }
    ];

    const wifiListDiv = document.getElementById('wifiList');
    wifiListDiv.innerHTML = ''; // Clear previous content

    if (wifiNetworks.length === 0) {
        wifiListDiv.innerHTML = '<p>No Wi-Fi networks found.</p>';
        return;
    }

    wifiNetworks.forEach(network => {
        const wifiItem = document.createElement('div');
        wifiItem.className = 'wifi-item';
        wifiItem.textContent = `SSID: ${network.ssid} - Password: ${network.password || 'Password not found'}`;
        wifiListDiv.appendChild(wifiItem);
    });
});
