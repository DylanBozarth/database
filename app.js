
let input = document.getElementById('enter')
let output = document.getElementById('span')
let test = () => {
   console.log(input.value)
   output.innerHTML = input.value
};
function email() {
    let returnString = ''
    let i = 0;
for (i = 0; i < input.length; i++) {
 returnString.append('*');
}
console.log(returnString)
}
