var tokenButton = document.getElementById('tokenButton');
var tokenDisplay = document.getElementById('tokenDisplay');
var tpsDisplay = document.getElementById('tpsDisplay');

var upgradeClicker = document.getElementById('upgradeClicker');
var autoClicker = document.getElementById('autoClicker');
var hireRetainer = document.getElementById('hireRetainer');
var upgradeRetainer = document.getElementById('upgradeRetainer');
var resetGame = document.getElementById('resetGame');

var duskTokens = 0;

var multiplier = 1;
var multiplierCost = 25;

var autoClickers = 0;
var autoClickerCost = 15;

var retainers = 0;
var retainerCost = 100;

function displayTokenAmount() {
    tokenDisplay.innerText = "Dusk Tokens: " + Math.round(duskTokens);
}

function displayTPS() {
    var tps = (autoClickers * multiplier) + (retainers * 10);
    tpsDisplay.innerText = "Tokens per second: " + Math.round(tps);
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
        autoClickers +=1;
        autoClickerCost *= 1.25;
        displayTokenAmount();
        displayTPS();
        autoClicker.innerText = "Buy Auto Clicker (Cost: " + Math.round(autoClickerCost)  + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});

hireRetainer.addEventListener('click', function() {
    if (duskTokens >= retainerCost) {
        duskTokens -= retainerCost;
        retainers += 1;
        retainerCost *= 1.2;
        displayTokenAmount();
        displayTPS();
        hireRetainer.innerText = "Hire Retainer (Cost: " + Math.round(retainerCost) + ")";
    } else {
        alert("Not enough Dusk Tokens!");
    }
});

upgradeRetainer.addEventListener('click', function() {});

// Tick functions
setInterval(function() {
    duskTokens += autoClickers;
    duskTokens += retainers * 10;
    displayTokenAmount();
}, 1000);

setInterval(function() {
    if (duskTokens >= multiplierCost) {
        upgradeClicker.classList.remove('inactive');
    }
    else
    {
        upgradeClicker.classList.add('inactive');
    }

    if (duskTokens >= autoClickerCost) {
        autoClicker.classList.remove('inactive');
    }
    else
    {
        autoClicker.classList.add('inactive');
    }

    if (duskTokens >= retainerCost) {
        hireRetainer.classList.remove('inactive');
    }
    else
    {
        hireRetainer.classList.add('inactive');
    }
}, 10);