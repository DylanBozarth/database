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
const makeArray = () => {
let universe = []
universe.push({
  "starType": "Yellow",
  "otherData": "yes"
})
console.log(universe)
}