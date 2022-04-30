var starList = [
    "Red-Giant",
    "Red-Supergiant",
    "Blue-Giant",
    "White-Dwarf",
    "Yellow-Dwarf",
    "Red-Dwarf",
    "Brown-Dwarf",
];
var planetList = [
    "Rocky",
    "Temperate",
    "Ocean",
    "Frozen",
    "Lava",
    "Gas"
];
var lengthOfStarList = starList.length;
var lengthOfPlanetList = planetList.length;
var letThereBeLight = function () {
    var universe = [];
    var starNumber = 5;
    var randomNumberOfPlanets = Math.floor(Math.random() * 6);
    for (var i = 0; i < starNumber; i++) {
        universe.push({
            systemStar: starList[Math.floor(Math.random() * lengthOfStarList)],
            planets: [planetList[Math.floor(Math.random() * lengthOfPlanetList)]]
        });
    }
    console.log(universe);
};
//starList[Math.floor(Math.random() * 6)]
