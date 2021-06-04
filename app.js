let input = document.getElementById("enter");
let output = document.getElementById("span");
function testIt() {
  var addMe = input.value + " Is what you said";
  output.innerHTML = addMe;
}
//done with testing
const EmailHidePromise = () => {
  return new Promise((resolve, reject) => {
    let str = input.value;
    if (str.indexOf("@" !== -1)) {
      resolve(email(str));
    } else reject("no");
  });
};
function email() {
  let str = input.value;
  let splitEmail = str.split("@");

  let returnString = "";

  for (i = 1; i < str.length; i++) {
    returnString += "*";
  }
  output.innerHTML = str[0] + returnString + splitEmail[1];
}
EmailHidePromise.then(() => {
  console.log('THEN')
})
//come back to this later
function getDomain() {
  let str = input.value;
  let regex = /^.*[a-zA-Z]+.*$/i;
  return regex.test(str);
}
function isPalindrome(x) {
  let flip = x.toString();
  let testme = flip.split('').reverse().join('')
 let newnumber = parseInt(testme)
if (newnumber === x) {
   return true
}
  else {
      return false
  }
};
isPalindrome(111)


function occurances() {
  let str = input.value;
  let splitString = str.split('')
let returnStuff = {}
for (var i = 0; i < splitString.length; i++) {
  var count = (str.match(/[i]/g) || []).length;
  console.log(count)
}
  output.innerHTML = splitString
}