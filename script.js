const smartphones = [
    {
        year: 2000,
        brand: "Nokia",
        model: "Nokia 3310",
        screen: "1.5 inch",
        ram: "No RAM",
        storage: "No Internal Storage",
        camera: "No Camera",
        battery: "1000mAh",
        processor: "Basic Mobile Chip",
        sim: "Single SIM",
        colors: "Blue, Black",
        os: "Feature OS",
        network: "2G",
        connectivity: "SMS, FM Radio",
        charging: "Slow Charging",
        security: "PIN Lock",
        features: "Snake Game, Durable Body"
    },

    {
        year: 2007,
        brand: "Apple",
        model: "iPhone",
        screen: "3.5 inch",
        ram: "128MB",
        storage: "4GB/8GB/16GB",
        camera: "2MP",
        battery: "1400mAh",
        processor: "Samsung ARM 11",
        sim: "Single SIM",
        colors: "Black",
        os: "iPhone OS",
        network: "2G",
        connectivity: "WiFi, Bluetooth",
        charging: "Standard Charging",
        security: "Passcode",
        features: "Touchscreen Revolution"
    },

    {
        year: 2010,
        brand: "Samsung",
        model: "Galaxy S",
        screen: "4 inch Super AMOLED",
        ram: "512MB",
        storage: "8GB/16GB",
        camera: "5MP",
        battery: "1500mAh",
        processor: "1GHz Hummingbird",
        sim: "Single SIM",
        colors: "Black",
        os: "Android",
        network: "3G",
        connectivity: "WiFi, GPS",
        charging: "Fast Charging",
        security: "Pattern Lock",
        features: "Android Growth"
    },

    {
        year: 2015,
        brand: "OnePlus",
        model: "OnePlus 2",
        screen: "5.5 inch",
        ram: "4GB",
        storage: "64GB",
        camera: "13MP",
        battery: "3300mAh",
        processor: "Snapdragon 810",
        sim: "Dual SIM",
        colors: "Black",
        os: "Android",
        network: "4G",
        connectivity: "USB Type-C",
        charging: "Fast Charging",
        security: "Fingerprint Sensor",
        features: "Flagship Killer"
    },

    {
        year: 2020,
        brand: "Samsung",
        model: "Galaxy S20 Ultra",
        screen: "6.9 inch 120Hz",
        ram: "12GB",
        storage: "128GB/512GB",
        camera: "108MP Quad Camera",
        battery: "5000mAh",
        processor: "Snapdragon 865",
        sim: "Dual SIM",
        colors: "Black, Gray",
        os: "Android 10",
        network: "5G",
        connectivity: "WiFi 6, NFC",
        charging: "45W Fast Charging",
        security: "Fingerprint + Face Unlock",
        features: "100x Zoom, 8K Video"
    },

    {
        year: 2025,
        brand: "Apple",
        model: "iPhone 17 Pro Max",
        screen: "6.9 inch OLED 144Hz",
        ram: "16GB",
        storage: "256GB/512GB/1TB",
        camera: "200MP AI Triple Camera",
        battery: "5500mAh",
        processor: "A19 Bionic",
        sim: "eSIM + Physical SIM",
        colors: "Titanium Black, Silver, Blue",
        os: "iOS 19",
        network: "5G Advanced",
        connectivity: "WiFi 7, Satellite",
        charging: "80W Fast Charging",
        security: "Face ID 2.0",
        features: "AI Assistant, AR Support, Satellite Calling"
    }
];

const container = document.getElementById("phoneContainer");
const searchInput = document.getElementById("searchInput");
const yearFilter = document.getElementById("yearFilter");

function displayPhones(phoneList) {
    container.innerHTML = "";

    phoneList.forEach(phone => {
        const card = document.createElement("div");
        card.classList.add("phone-card");

        card.innerHTML = `
            <h2>${phone.brand} ${phone.model}</h2>
            <p><strong>Year:</strong> ${phone.year}</p>
            <p><strong>Screen:</strong> ${phone.screen}</p>
            <p><strong>RAM:</strong> ${phone.ram}</p>
            <p><strong>Storage:</strong> ${phone.storage}</p>
            <p><strong>Camera:</strong> ${phone.camera}</p>
            <p><strong>Battery:</strong> ${phone.battery}</p>
            <p><strong>Processor:</strong> ${phone.processor}</p>
            <p><strong>SIM:</strong> ${phone.sim}</p>
            <p><strong>Colors:</strong> ${phone.colors}</p>
            <p><strong>Operating System:</strong> ${phone.os}</p>
            <p><strong>Network:</strong> ${phone.network}</p>
            <p><strong>Connectivity:</strong> ${phone.connectivity}</p>
            <p><strong>Charging:</strong> ${phone.charging}</p>
            <p><strong>Security:</strong> ${phone.security}</p>
            <p><strong>Features:</strong> ${phone.features}</p>

            <span class="tag">${phone.year}</span>
        `;

        container.appendChild(card);
    });
}

function populateYears() {
    const years = [...new Set(smartphones.map(p => p.year))];

    years.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

function filterPhones() {
    const searchText = searchInput.value.toLowerCase();
    const selectedYear = yearFilter.value;

    const filtered = smartphones.filter(phone => {
        const matchesSearch =
            phone.brand.toLowerCase().includes(searchText) ||
            phone.model.toLowerCase().includes(searchText);

        const matchesYear =
            selectedYear === "all" || phone.year == selectedYear;

        return matchesSearch && matchesYear;
    });

    displayPhones(filtered);
}

searchInput.addEventListener("input", filterPhones);
yearFilter.addEventListener("change", filterPhones);

populateYears();
displayPhones(smartphones);
