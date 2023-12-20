// Importerer modulene inn i js-filen
import WarriorModule from "./modules/WarriorModule.js"
import MachineModule from "./modules/MachineModule.js";
import AnimalModule from "./modules/AnimalModule.js";

// Henter materialoversikten  
const goldAmountDisplay = document.querySelector("#gold-amount-display");
const metalAmountDisplay = document.querySelector("#metal-amount-display");
const woodAmountDisplay = document.querySelector("#wood-amount-display");

// Henter de forskjellige seksjonene som viser de ulike items-ene man kan kjøpe
const warriorsSection = document.querySelector("#warriors-section");
const machineSection = document.querySelector("#machine-section");
const animalSection = document.querySelector("#animal-section");


// Funksjon som oppdaterer materialoversikten 
const updateMaterialDisplay = () => {
    goldAmountDisplay.innerHTML = localStorage.getItem("gold") || "0";
    metalAmountDisplay.innerHTML = localStorage.getItem("metal") || "0";
    woodAmountDisplay.innerHTML = localStorage.getItem("wood") || "0";
} 

// Funksjon som sørger for at alle items vises på forsiden 
const showAll = () => {
    const allWarriors = WarriorModule.getAll();
    const allMachines = MachineModule.getAll();
    const allAnimals = AnimalModule.getAll();
    showWarriors(allWarriors);
    showMachines(allMachines);
    showAnimals(allAnimals);
}

// Funksjon for å vise warriors på forsiden
const showWarriors = (warriors) => {
    let htmlTxt = "";

    warriors.forEach(warrior => {
        htmlTxt += `
            <article class="col-12 col-md-6 col-lg-4">
                <div class="border shadow rounded p-3 text-center h-100 w-60 d-flex flex-column">
                    <h3>${warrior.name}</h3>
                    <img class="img-fluid w-50 m-auto" src="../images/${warrior.img}">
                    <button data-name=${warrior.name} class="btn btn-success w-60 m-auto mb-0">Buy Warrior ${warrior.price} <img style="width: 1.2rem;" src="../images/gold-coin.png"</button>
                </div>
            </article>
        `;
    });

    warriorsSection.innerHTML = htmlTxt;
}

// Funksjon for å vise machines på forsiden
const showMachines = (machines) => {
    let htmlTxt = "";

    machines.forEach(machine => {
        htmlTxt += `
            <article class="col-12 col-md-6 col-lg-4">
                <div class="border shadow rounded p-3 text-center h-100 d-flex flex-column">
                    <h3>${machine.name}</h3>
                    <img class="img-fluid w-50 m-auto" src="../images/${machine.img}">
                    <button data-name=${machine.name} class="btn btn-success w-60 m-auto mb-0">Buy ${machine.priceGold} 
                        <img style="width: 1.2rem;" src="../images/gold-coin.png"> ${machine.priceMetal}
                        <img style="width: 1.2rem;" src="../images/metal.png"> ${machine.priceWood}
                        <img style="width: 1.2rem;" src="../images/wood.png">
                    </button>
                </div>
            </article>
        `;
    })
    machineSection.innerHTML = htmlTxt;

}

// Funksjon for å vise animals på forsiden
const showAnimals = (animals) => {
    let htmlTxt = "";

    animals.forEach(animal => {
        htmlTxt += `
            <article class="col-12 col-md-6 col-lg-4">
                <div class="border shadow rounded p-3 text-center h-100 d-flex flex-column">
                    <h3>${animal.name}</h3>
                    <img class="img-fluid w-50 m-auto" src="../images/${animal.img}">
                    <button data-name=${animal.name} class="btn btn-success w-60 m-auto mb-0">Buy ${animal.price} <img style="width: 1.2rem;" src="../images/gold-coin.png"</button>
                </div>
            </article>
        `;
    })
    animalSection.innerHTML = htmlTxt;
}

// IIFE som kjører umiddelbart når siden lastes
(()=>{
    updateMaterialDisplay();
    showAll();
})();   
