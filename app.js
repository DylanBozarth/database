let input = document.getElementById('input')
let output = document.getElementById('span')
let test = () => {
   console.log('aa')
};
function Email() {
    let returnString = ''
    let i = 0;
for (i = 0; i < input.length; i++) {
 returnString.append('*');
}
output.innerHTML = returnString
};
var otherTest = function() {
    console.log('aa')
}