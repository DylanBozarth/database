let input = document.getElementById('input')
let output = document.getElementById('span')
let test = () => {
    output.innerHTML = input.value
};
function Email() {
    let returnString = '',
    var i = 0;
for (i = 0; i < input.length; i++) {
 returnString.append('*');
}
output.innerHTML = returnString
};