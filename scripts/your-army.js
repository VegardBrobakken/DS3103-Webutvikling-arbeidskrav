// Henter inn materialoversikten
const goldAmountDisplay = document.querySelector("#gold-amount-display");
const metalAmountDisplay = document.querySelector("#metal-amount-display");
const woodAmountDisplay = document.querySelector("#wood-amount-display");

// Henter inn containers for your army siden 
const warriorsContainer = document.querySelector("#warriors-container");
const othersContainer = document.querySelector("#others-container");

// Henter inn HTML-elemtente som behanlder søke og show all funksjonene
const inputSearch = document.querySelector("#input-search");
const searchBtn = document.querySelector("#search-btn");
const showAllBtn = document.querySelector("#show-all-btn");
const searchStatus = document.querySelector("#search-status");

// Funksjon som oppdaterer materialoversikten
const updateMaterialDisplay = () => {
    goldAmountDisplay.innerHTML = localStorage.getItem("gold") || 0;
    metalAmountDisplay.innerHTML = localStorage.getItem("metal") || 0;
    woodAmountDisplay.innerHTML = localStorage.getItem("wood") || 0;
} 

// Funksjon som henter arrayet fra localstorage og filtrerer for å finne det brukeren søker etter
const showItemsBySearch = () => {
    const search = inputSearch.value

    const army = JSON.parse(localStorage.getItem("currentArmy"));

    if(!army || army.length < 1){
        searchStatus.innerHTML = `
           <article>
                You dont own this item. 
           </article>
           `;
    } else {
        const filteredArmy = army.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        if(filteredArmy.length < 1) {
           searchStatus.innerHTML = `
           <article>
                You dont own this item. 
           </article>
           `
        } else{
            showOwnedItems(filteredArmy);
            searchStatus.innerHTML = "";   
        }
    }
}

// Funksjon som viser alle eide items
const showAll = () => {
    const myArmy = JSON.parse(localStorage.getItem("currentArmy"));
    showOwnedItems(myArmy);
}


// Funksjon som behandler output og tar i mot parametre fra de andre funksjonene
const showOwnedItems = (myArmy) => {

    let htmlTxt1 = "";
    let htmlTxt2 = "";

    myArmy.forEach(item => {
        if (item.type === "warrior") {
            htmlTxt1 += `
            <article>
                <div class="border shadow rounded h-100 p-3 d-flex flex-column justify-content-between">
                    <p class="text-center">${item.name}</p>
                    <img class="h-100" src="images/${item.img}">
                </div>
            </article>
            `
        } else {
            
            htmlTxt2 += `
                <article>
                    <div class="border shadow rounded h-100 p-3 d-flex flex-column justify-content-between">
                    <p class="text-center" >${item.name}</p>
                    <img class="" src="images/${item.img}">
                    </div>
                </article>
                `
        }
    });
    
    warriorsContainer.innerHTML = htmlTxt1;
    othersContainer.innerHTML = htmlTxt2;
}

// Funksjon for å sette onclick på de forskjellige knappene
const setEvents = () => {
    searchBtn.addEventListener("click", showItemsBySearch)
    showAllBtn.addEventListener("click", showAll)
}

// IIFE som kjører med en gang siden laster
(() => {
    updateMaterialDisplay();
    showAll();
    setEvents();
})();