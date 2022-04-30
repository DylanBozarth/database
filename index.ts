let starList = [
  "Red-Giant",
  "Red-Supergiant",
  "Blue-Giant",
  "White-Dwarf",
  "Yellow-Dwarf",
  "Red-Dwarf",
  "Brown-Dwarf",
];
let planetList = [
  "Rocky",
  "Temperate",
  "Ocean",
  "Frozen",
  "Lava",
  "Gas"
];
const lengthOfStarList = starList.length;
const lengthOfPlanetList = planetList.length;
const letThereBeLight = () => {
  let universe = []
  const starNumber = 5;
  let randomNumberOfPlanets = Math.floor(Math.random() * 6);
  for (let i = 0; i < starNumber; i++) {
    universe.push({
      systemStar: starList[Math.floor(Math.random() * lengthOfStarList)],
      systemPlanets: [planetList[Math.floor(Math.random() * lengthOfPlanetList)]]
    })

  }

  console.log(universe)
}

//starList[Math.floor(Math.random() * 6)]