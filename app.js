
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
  var str = input.value  
  console.log(str.indexOf('@'))
  if (str.indexOf('@') === -1) {
        output.innerHTML = 'Use a real email, retard'
    }
    else {
        let returnString = ''
    
    for (i = 1; i < str.length; i++) {
returnString += ('*')
    }
    output.innerHTML = str[0] + returnString
    }
    
    
 
}


