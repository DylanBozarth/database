const Add = (a:number ,b:number) => {
    return a + b
}
Add(1, 7);
const output: Element | null = document.querySelector("#span")

function returnRandomQuote(quotes:JSON) {
  if (output !== null) {
    output.innerHTML = "Cheese" //(quotes[Math.floor(Math.random() * 43)]);
  }
}
let starList = [
  "Red-Giant",
  "Red-Supergiant",
  "Blue-Giant",
  "White-Dwarf",
  "Yellow-Dwarf",
  "Red-Dwarf",
  "Brown-Dwarf",
];
const letThereBeLight = () => {
let universe = []
const starNumber = 5;
for (let i = 0; i < starNumber; i++) {
  universe.push(starList[Math.floor(Math.random() * 6)])
}

console.log(universe)
}