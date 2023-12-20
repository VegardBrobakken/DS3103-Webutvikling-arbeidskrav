// Henter elementer fra HTML

const goldAmountDisplay = document.querySelector("#gold-amount-display");
const metalAmountDisplay = document.querySelector("#metal-amount-display");
const woodAmountDisplay = document.querySelector("#wood-amount-display");

const materialsContainer = document.querySelector("#materials-container");

const imgGetMetal = document.querySelector("#img-get-metal");
const imgGetWood = document.querySelector("#img-get-wood");

// Setter startverdier for alle materialene
let goldAmount = 0;
let metalAmount = 0;
let woodAmount = 0;

// Funksjon for å oppdatere material-oversikten
const updateMaterialDisplay = () => {
    goldAmountDisplay.innerHTML = localStorage.getItem("gold") || 0;
    metalAmountDisplay.innerHTML = localStorage.getItem("metal") || 0;
    woodAmountDisplay.innerHTML = localStorage.getItem("wood") || 0;
}

// Funksjon for å hente metall med 25% sjanse for gull
const collectMetal = () => {
    const metalGain = 60;
    const goldGain = 50;
    let randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber != 3) {
        let metalAmount = parseInt(localStorage.getItem("metal")) || 0;
        metalAmount = metalAmount + metalGain;
        localStorage.setItem("metal", metalAmount.toString());
    } else {
        let goldAmount = parseInt(localStorage.getItem("gold")) || 0;
        goldAmount = goldAmount + goldGain;
        localStorage.setItem("gold", goldAmount.toString());
    }
    updateMaterialDisplay();
}   

// Funksjon for å samle tre
const collectWood = () => {
    const woodGain = 45;
    let woodAmount = parseInt(localStorage.getItem("wood")) || 0;
    woodAmount = woodAmount + woodGain;
    localStorage.setItem("wood", woodAmount.toString());
    updateMaterialDisplay();
};

// Setter onclick events for bildene som klikkes på for å samle materialer
const setEvents = () => {
    imgGetMetal.addEventListener("click", collectMetal)
    imgGetWood.addEventListener("click", collectWood)
}

// IIFE som kjøres umiddelbart da siden lastes
(()=>{
    updateMaterialDisplay()
    setEvents();
})();
