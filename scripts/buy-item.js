import WarriorModule from "./modules/WarriorModule.js"
import MachineModule from "./modules/MachineModule.js";
import AnimalModule from "./modules/AnimalModule.js";

const goldAmountDisplay = document.querySelector("#gold-amount-display");
const metalAmountDisplay = document.querySelector("#metal-amount-display");
const woodAmountDisplay = document.querySelector("#wood-amount-display");

const updateMaterialDisplay = () => {
    goldAmountDisplay.innerHTML = localStorage.getItem("gold");
    metalAmountDisplay.innerHTML = localStorage.getItem("metal");
    woodAmountDisplay.innerHTML = localStorage.getItem("wood");
} 


const buyButtons = document.querySelectorAll("button");


const buyItem = (name) => {

    const warriors = WarriorModule.getAll()
    const animals = AnimalModule.getAll()
    const machines = MachineModule.getAll()
    
    const woodAmount = parseInt(localStorage.getItem("wood"))
    const goldAmount = parseInt(localStorage.getItem("gold"))
    const metalAmount = parseInt(localStorage.getItem("metal"))

    const warrior = warriors.find(warrior => warrior.name.includes(name));
    const animal = animals.find(animal => animal.name.includes(name))
    const machine = machines.find(machine => machine.name.includes(name))
    
    if (warrior) {
        if (warrior.price <= goldAmount) {
            localStorage.setItem("gold", goldAmount - warrior.price);
            updateMaterialDisplay();
            addToArmy(warrior);
            alert("Warrior has been added to your army!")
        } else {
            alert("You dont have enough gold to buy this item!")
        }
    } else if (machine) {
        if (
            machine.priceGold <= goldAmount &&
            machine.priceMetal <= metalAmount &&
            machine.priceWood <= woodAmount
        ) {
            localStorage.setItem("gold", goldAmount - machine.priceGold);
            localStorage.setItem("metal", metalAmount - machine.priceMetal);
            localStorage.setItem("wood", woodAmount - machine.priceWood);
            updateMaterialDisplay();
            addToArmy(machine)
            alert("Machine has been added to your army!")
        } else {
            alert("You dont have enough resources to buy this item!")
        }
    }

    else if (animal) {
        if (animal.price <= goldAmount) {
            localStorage.setItem("gold", goldAmount - animal.price);
            updateMaterialDisplay();
            addToArmy(animal);
            alert("Animal has been added to your army!")
        } else {
            alert("You dont have enough gold to buy this item!")
        }
    } else {
        alert("Unavailable")
    }
}

const addToArmy = (item) => {
    const currentArmy = JSON.parse(localStorage.getItem("currentArmy")) || [];
    currentArmy.push(item);
    
    const updateArmy = JSON.stringify(currentArmy);
    localStorage.setItem("currentArmy", updateArmy);
}

const setEvents = () => {
    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            let itemName = button.getAttribute("data-name");
            buyItem(itemName);
        })
    })
}

(() =>{
    updateMaterialDisplay()
    setEvents()
})()