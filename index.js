var Add = function (a, b) {
    return a + b;
};
Add(1, 7);
var output = document.querySelector("#span");
function returnRandomQuote(quotes) {
    if (output !== null) {
        output.innerHTML = "Cheese"; //(quotes[Math.floor(Math.random() * 43)]);
    }
}
var starList = [
    "Red-Giant",
    "Red-Supergiant",
    "Blue-Giant",
    "White-Dwarf",
    "Yellow-Dwarf",
    "Red-Dwarf",
    "Brown-Dwarf",
];
var letThereBeLight = function () {
    var universe = [];
    var starNumber = 5;
    for (var i = 0; i < starNumber; i++) {
        universe.push(starList[Math.floor(Math.random() * 7)]);
    }
    console.log(universe);
};
