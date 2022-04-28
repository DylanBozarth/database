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
var makeArray = function () {
    var universe = [];
    universe.push({
        "starType": "Yellow",
        "otherData": "yes"
    });
    console.log(universe);
};
