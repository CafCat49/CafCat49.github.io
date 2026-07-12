var tokenButton = document.getElementById('tokenButton');
var tokenDisplay = document.getElementById('tokenDisplay');
var tpsDisplay = document.getElementById('tpsDisplay');

var upgradeClicker = document.getElementById('upgradeClicker');
var autoClicker = document.getElementById('autoClicker');

var duskTokens = 0;

var multiplier = 1;
var multiplierCost = 25;

var autoClickers = 0;
var autoClickerCost = 15;

function displayTokenAmount() {
    tokenDisplay.innerText = "Dusk Tokens: " + Math.round(duskTokens);
}

function displayTPS() {
    tpsDisplay.innerText = "Tokens per tick: " + Math.round(autoClickers * 0.1) / 1;
}

tokenButton.addEventListener('click', function() {
    duskTokens += multiplier;
    displayTokenAmount();
});

upgradeClicker.addEventListener('click', function() {
    if (duskTokens >= multiplierCost) {
        duskTokens -= multiplierCost;
        multiplierCost *= 1.3;
        multiplier ++;
        displayTokenAmount();
        upgradeClicker.innerText = "Upgrade Clicker (Cost: " + Math.round(multiplierCost) + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});

autoClicker.addEventListener('click', function() {
    if (duskTokens >= autoClickerCost) {
        duskTokens -= autoClickerCost;
        autoClickers ++;
        autoClickerCost *= 1.25;
        displayTokenAmount();
        displayTPS();
        autoClicker.innerText = "Buy Auto Clicker (Cost: " + Math.round(autoClickerCost)  + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});

setInterval(function() {
    if (autoClickers <= 0) { return; }

    duskTokens += autoClickers * 0.1;
    displayTokenAmount();
}, 1000/6);