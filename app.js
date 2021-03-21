
let input = document.getElementById('enter')
let output = document.getElementById('span')
let test = () => {
   console.log(input.value)
}
function Email() {
    let returnString = ''
    let i = 0;
for (i = 0; i < input.length; i++) {
 returnString.append('*');
}
output.innerHTML = returnString
}
