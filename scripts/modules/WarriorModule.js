const WarriorModule = (() =>{

    const warriors = [
        {
            type: "warrior",
            name: "Snake",
            img: "warrior-1.jpg", 
            price: 200 
        },
        { 
            type: "warrior",     
            name: "Giant",
            img: "warrior-2.jpg",
            price: 500
        },
        {
            type: "warrior",
            name: "Big axe",
            img: "warrior-3.jpg",
            price: 150
        },
        {            
            type: "warrior",
            name: "Thief", 
            img: "warrior-4.jpg",
            price: 50
        },
        {
            type: "warrior",
            name: "Tanks", 
            img: "warrior-5.jpg",
            price: 250
        },
        {
            type: "warrior",
            name: "Berserker", 
            img: "warrior-6.jpg",
            price: 275
        },
    ]

    const getAll = () => structuredClone(warriors);

    return {
        getAll,
    }

})();

export default WarriorModule;