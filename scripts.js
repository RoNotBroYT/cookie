let cookies = 0;
let cookiesPerClick = 1;
let cookiesPerSecond = 0;
let factories = 0, mines = 0, farms = 0, planets = 0, bombs = 0, nukes = 0;
let upgradeCosts = [10, 50, 100];
let upgradeValues = [1, 5, 10];
let factoryCost = 200, mineCost = 1000, farmCost = 5000, planetCost = 9000, bombCost = 40000, nukeCost = 20000000;
let currentColor = "blue"; // To track the current background color

document.getElementById("cookie").onclick = function() {
    cookies += cookiesPerClick;
    updateCounter();
};

function toggleBackgroundColor() {
    if (currentColor === "blue") {
        document.body.style.backgroundColor = "green";
        currentColor = "green";
    } else if (currentColor === "green") {
        document.body.style.backgroundColor = "red";
        currentColor = "red";
    } else {
        document.body.style.backgroundColor = "blue";
        currentColor = "blue";
    }
}

function reloadGame() {
    cookies = 0;
    cookiesPerClick = 1;
    cookiesPerSecond = 0;
    factories = 0;
    mines = 0;
    farms = 0;
    planets = 0;
    bombs = 0;
    nukes = 0;
    upgradeCosts = [10, 50, 100];
    updateCounter();
}

function toggleShop() {
    const shop = document.getElementById("shop");
    shop.style.display = (shop.style.display === "none" || shop.style.display === "") ? "block" : "none";
}

function updateCounter() {
    document.getElementById("counter").textContent = "Cookies: " + cookies;
    document.getElementById("factories").textContent = factories;
    document.getElementById("mines").textContent = mines;
    document.getElementById("farms").textContent = farms;
    document.getElementById("planets").textContent = planets;
    document.getElementById("bombs").textContent = bombs;
    document.getElementById("nukes").textContent = nukes;
    document.getElementById("factoryCost").textContent = factoryCost;
    document.getElementById("mineCost").textContent = mineCost;
    document.getElementById("farmCost").textContent = farmCost;
    document.getElementById("planetCost").textContent = planetCost;
    document.getElementById("bombCost").textContent = bombCost;
    document.getElementById("nukeCost").textContent = nukeCost;
}

setInterval(function() {
    cookies += cookiesPerSecond;
    updateCounter();
}, 1000);

function buyUpgrade(upgradeIndex) {
    if (cookies >= upgradeCosts[upgradeIndex - 1]) {
        cookies -= upgradeCosts[upgradeIndex - 1];
        cookiesPerClick += upgradeValues[upgradeIndex - 1];
        upgradeCosts[upgradeIndex - 1] *= 2;
        updateCounter();
    }
}

function buyFactory() {
    if (cookies >= factoryCost) {
        cookies -= factoryCost;
        factories++;
        cookiesPerSecond += 1;
        factoryCost *= 2;
        updateCounter();
    }
}

function buyMine() {
    if (cookies >= mineCost) {
        cookies -= mineCost;
        mines++;
        cookiesPerSecond += 5;
        mineCost *= 2;
        updateCounter();
    }
}

function buyFarm() {
    if (cookies >= farmCost) {
        cookies -= farmCost;
        farms++;
        cookiesPerSecond += 20;
        farmCost *= 2;
        updateCounter();
    }
}

function buyPlanet() {
    if (cookies >= planetCost) {
        cookies -= planetCost;
        planets++;
        cookiesPerSecond += 2000;
        planetCost *= 2;
        updateCounter();
    }
}

function buyBomb() {
    if (cookies >= bombCost) {
        cookies -= bombCost;
        bombs++;
        cookiesPerSecond += 10000;
        bombCost *= 2;
        updateCounter();
    }
}

function buyNuke() {
    if (cookies >= nukeCost) {
        cookies -= nukeCost;
        nukes++;
        cookiesPerSecond += 1000000;
        nukeCost *= 2;
        updateCounter();
    }
}
