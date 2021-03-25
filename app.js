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
