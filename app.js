
let input = document.getElementById('enter')
let output = document.getElementById('span')
let test = () => {
   console.log(input.value)
   output.innerHTML = input.value
};
function testIt() {
    var addMe = input.value + 'YYESS'
    output.innerHTML = addMe
}
//done with testing 
function email() {
    let returnString = ''
    var str = input.value
    if (returnString.length < str.length) {
        returnString + '*'

    }
console.log(returnString)
}


