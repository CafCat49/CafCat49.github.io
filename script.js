// --- DOM ELEMENTS ---
const tokenButton = document.getElementById('tokenButton');
const tokenDisplay = document.getElementById('tokenDisplay');
const tpsDisplay = document.getElementById('tpsDisplay');

// Store Buttons
const upgradeClicker = document.getElementById('upgradeClicker');
const autoClicker = document.getElementById('autoClicker');
const hireRetainer = document.getElementById('hireRetainer');
const upgradeRetainer = document.getElementById('upgradeRetainer');
const upgradeAirship = document.getElementById('upgradeAirship');
const buyAirship = document.getElementById('buyAirship');
const upgradeSubmarine = document.getElementById('upgradeSubmarine');
const buySubmarine = document.getElementById('buySubmarine');

// Danger Zone
const resetGame = document.getElementById('resetGame');

// Main Logo
const duskLogo = document.getElementById('duskLogo');

// Stats Display List
const inventoryDisplay = document.getElementById('inventoryDisplay');


// --- GAME VARIABLES & STATES ---
let duskTokens = 0;

// Clicker
let multiplier = 1;
let multiplierCost = 25;

// Auto Clickers
let autoClickers = 0;
let autoClickerCost = 15;

// Retainers
let retainers = 0;
let retainerCost = 100;
let retainerPower = 10;       // Base power per retainer
let retainerUpgradeLevel = 1;  // Multiplier for retainer output
let retainerUpgradeCost = 225;

// Airships
let airships = 0;
let airshipCost = 750;
let airshipPower = 50;        // Base power per airship
let airshipUpgradeLevel = 1;   // Multiplier for airship output
let airshipUpgradeCost = 1050;

// Submarines
let submarines = 0;
let submarineCost = 3600;
let submarinePower = 250;      // Base power per submarine
let submarineUpgradeLevel = 1; // Multiplier for submarine output
let submarineUpgradeCost = 4200;


// --- ART ASSETS ---
const defaultLogo = 'assets/dusk.png';
const hoverLogo = 'assets/dusk_uwu_highlight.png';
const clickLogo = 'assets/dusk_uwu.png';


// --- DISPLAY FUNCTIONS ---

// Update token count text
function displayTokenAmount() {
    tokenDisplay.innerText = "Dusk Tokens: " + Math.round(duskTokens);
}

// Calculate and show real-time Tokens Per Second (TPS)
function displayTPS() {
    let tps = (autoClickers * multiplier) +
        (retainers * retainerPower * retainerUpgradeLevel) +
        (airships * airshipPower * airshipUpgradeLevel) +
        (submarines * submarinePower * submarineUpgradeLevel);

    tpsDisplay.innerText = "Tokens per second: " + Math.round(tps);
}

// Keep the Cyan Stats screen updated with actual variables
function updateInventoryUI() {
    inventoryDisplay.innerHTML = `
        <li>Clicker Power: ${multiplier}</li>
        <li>Auto Clickers: ${autoClickers}</li>
        <li>Retainers: ${retainers}</li>
        <li>Retainer Power: ${retainerPower * retainerUpgradeLevel}</li>
        <li>Airships: ${airships}</li>
        <li>Airship Power: ${airshipPower * airshipUpgradeLevel}</li>
        <li>Submarines: ${submarines}</li>
        <li>Submarine Power: ${submarinePower * submarineUpgradeLevel}</li>
    `;
}


// --- MAIN BUTTON EVENT LISTENERS ---

// Clicking the main button
tokenButton.addEventListener('click', function() {
    duskTokens += multiplier;
    displayTokenAmount();

    // Change image to click logo
    duskLogo.src = clickLogo;

    // Quick elastic bounce reset
    duskLogo.classList.remove('bounce-animation');
    void duskLogo.offsetWidth;
    duskLogo.classList.add('bounce-animation');
});

// Hover effects
tokenButton.addEventListener('mouseenter', function() {
    duskLogo.src = hoverLogo;
});

tokenButton.addEventListener('mouseleave', function() {
    duskLogo.src = defaultLogo;
});


// --- STORE ITEMS LOGIC ---

// 1. Upgrade Clicker
upgradeClicker.addEventListener('click', function() {
    if (duskTokens >= multiplierCost) {
        duskTokens -= multiplierCost;
        multiplier++;
        multiplierCost *= 1.3;
        displayTokenAmount();
        updateInventoryUI();
        upgradeClicker.innerText = "Upgrade Clicker (Cost: " + Math.round(multiplierCost) + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});

// 2. Buy Auto Clicker
autoClicker.addEventListener('click', function() {
    if (duskTokens >= autoClickerCost) {
        duskTokens -= autoClickerCost;
        autoClickers += 1;
        autoClickerCost *= 1.25;
        displayTokenAmount();
        displayTPS();
        updateInventoryUI();
        autoClicker.innerText = "Buy Auto Clicker (Cost: " + Math.round(autoClickerCost) + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});

// 3. Hire Retainer
hireRetainer.addEventListener('click', function() {
    if (duskTokens >= retainerCost) {
        duskTokens -= retainerCost;
        retainers += 1;
        retainerCost *= 1.2;
        displayTokenAmount();
        displayTPS();
        updateInventoryUI();
        hireRetainer.innerText = "Hire Retainer (Cost: " + Math.round(retainerCost) + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});

// 4. Level Up Retainer (Power multiplier upgrades by +1 each level)
upgradeRetainer.addEventListener('click', function() {
    if (duskTokens >= retainerUpgradeCost) {
        duskTokens -= retainerUpgradeCost;
        retainerUpgradeLevel += 1;
        retainerUpgradeCost *= 1.5;
        displayTokenAmount();
        displayTPS();
        updateInventoryUI();
        upgradeRetainer.innerText = "Level Up Retainer (Cost: " + Math.round(retainerUpgradeCost) + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});

// 5. Buy Airship
buyAirship.addEventListener('click', function() {
    if (duskTokens >= airshipCost) {
        duskTokens -= airshipCost;
        airships += 1;
        airshipCost *= 1.3;
        displayTokenAmount();
        displayTPS();
        updateInventoryUI();
        buyAirship.innerText = "Buy Airship (Cost: " + Math.round(airshipCost) + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});

// 6. Upgrade Airship
upgradeAirship.addEventListener('click', function() {
    if (duskTokens >= airshipUpgradeCost) {
        duskTokens -= airshipUpgradeCost;
        airshipUpgradeLevel += 1;
        airshipUpgradeCost *= 1.6;
        displayTokenAmount();
        displayTPS();
        updateInventoryUI();
        upgradeAirship.innerText = "Upgrade Airship (Cost: " + Math.round(airshipUpgradeCost) + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});

// 7. Buy Submarine
buySubmarine.addEventListener('click', function() {
    if (duskTokens >= submarineCost) {
        duskTokens -= submarineCost;
        submarines += 1;
        submarineCost *= 1.35;
        displayTokenAmount();
        displayTPS();
        updateInventoryUI();
        buySubmarine.innerText = "Buy Submarine (Cost: " + Math.round(submarineCost) + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});

// 8. Upgrade Submarine
upgradeSubmarine.addEventListener('click', function() {
    if (duskTokens >= submarineUpgradeCost) {
        duskTokens -= submarineUpgradeCost;
        submarineUpgradeLevel += 1;
        submarineUpgradeCost *= 1.7;
        displayTokenAmount();
        displayTPS();
        updateInventoryUI();
        upgradeSubmarine.innerText = "Upgrade Submarine (Cost: " + Math.round(submarineUpgradeCost) + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});


// --- DANGER ZONE (RESET GAME) ---
resetGame.addEventListener('click', function() {
    if (confirm("Are you absolutely sure you want to summon Evil Feivel? All of your tokens, clickers, and vehicles will be nuked!")) {
        duskTokens = 0;

        multiplier = 1;
        multiplierCost = 25;

        autoClickers = 0;
        autoClickerCost = 15;

        retainers = 0;
        retainerCost = 100;
        retainerUpgradeLevel = 1;
        retainerUpgradeCost = 225;

        airships = 0;
        airshipCost = 750;
        airshipUpgradeLevel = 1;
        airshipUpgradeCost = 1050;

        submarines = 0;
        submarineCost = 3600;
        submarineUpgradeLevel = 1;
        submarineUpgradeCost = 4200;

        // Reset Store Texts
        upgradeClicker.innerText = "Upgrade Clicker (Cost: " + multiplierCost + ")";
        autoClicker.innerText = "Buy Auto Clicker (Cost: " + autoClickerCost + ")";
        hireRetainer.innerText = "Hire Retainer (Cost: " + retainerCost + ")";
        upgradeRetainer.innerText = "Level Up Retainer (Cost: " + retainerUpgradeCost + ")";
        buyAirship.innerText = "Buy Airship (Cost: " + airshipCost + ")";
        upgradeAirship.innerText = "Upgrade Airship (Cost: " + airshipUpgradeCost + ")";
        buySubmarine.innerText = "Buy Submarine (Cost: " + submarineCost + ")";
        upgradeSubmarine.innerText = "Upgrade Submarine (Cost: " + submarineUpgradeCost + ")";

        displayTokenAmount();
        displayTPS();
        updateInventoryUI();
        alert("Evil Feivel has destroyed everything. Restart from zero!");
    }
});


// --- GAME LOOPS (INTERVALS) ---

// 1. Core Generation loop (runs once a second to add passive income)
setInterval(function() {
    duskTokens += (autoClickers * multiplier);
    duskTokens += (retainers * retainerPower * retainerUpgradeLevel);
    duskTokens += (airships * airshipPower * airshipUpgradeLevel);
    duskTokens += (submarines * submarinePower * submarineUpgradeLevel);
    displayTokenAmount();
}, 1000);

// 2. Class check loop (runs fast to dynamically gray-out buttons you cannot afford)
setInterval(function() {
    // Helper to toggle 'inactive' class based on cost
    const checkAffordability = (button, cost) => {
        if (duskTokens >= cost) {
            button.classList.remove('inactive');
        } else {
            button.classList.add('inactive');
        }
    };

    checkAffordability(upgradeClicker, multiplierCost);
    checkAffordability(autoClicker, autoClickerCost);
    checkAffordability(hireRetainer, retainerCost);
    checkAffordability(upgradeRetainer, retainerUpgradeCost);
    checkAffordability(buyAirship, airshipCost);
    checkAffordability(upgradeAirship, airshipUpgradeCost);
    checkAffordability(buySubmarine, submarineCost);
    checkAffordability(upgradeSubmarine, submarineUpgradeCost);
}, 50);

// --- INITIALIZE UI ---
updateInventoryUI();