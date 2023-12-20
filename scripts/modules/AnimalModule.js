const AnimalModule = (() => {

    const animals = [
        {
            type: "animal",
            name: "Elephant",
            img: "elephant.png",
            price: 600
        },
        {
            type: "animal",
            name: "Horse",
            img: "horse.png",
            price: 900
        },
        {
            type: "animal",
            name: "Wolf",
            img: "wolf.png",
            price: 1200
        }
    ]  

    const getAll = () => structuredClone(animals);

    return {
        getAll
    }

})();

export default AnimalModule;