
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
  let str = input.value  
  let splitEmail = str.split("@")
  
  
        let returnString = ''
    
    for (i = 1; i < str.length; i++) {
returnString += ('*')
    }
    output.innerHTML = str[0] + returnString + splitEmail[1]
}
const EmailHidePromise = (input) => {
    return new Promise ((resolve, reject) => {
        let str = input.value
if (str.indexOf('@' > -1)) {
    resolve (
email(str)
    )
}
        else 
            reject(output.innerHTML = 'Use a real email, retard')
        
    })
}
const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isKayoSick) {
          resolve(2);
        } else {
          reject(new Error("I am sad"));
        }
      }, 2000);
    });
  };
//come back to this later
function getDomain() {
    let str = input.value 
    let regex = /^.*[a-zA-Z]+.*$/i;
    return regex.test(str);
}

