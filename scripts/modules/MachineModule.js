const MachineModule = (() => {

    const machines = [
        {
            type: "machine",
            name: "Catapult",
            img: "catapult.png",
            priceGold: 300,
            priceMetal: 500,
            priceWood: 750
        },
        {
            type: "machine",
            name: "Cannon",
            img: "cannon.png",
            priceGold: 450,
            priceMetal: 800,
            priceWood: 500
        },
    ]  

    const getAll = () => structuredClone(machines);

    return {
        getAll
    }

})();

export default MachineModule;