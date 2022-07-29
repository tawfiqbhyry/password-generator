const pwEL = document.querySelector("#result h2");
const copyEL = document.querySelector("#result .copy-item");
const lengthEL = document.querySelector(".includes .password-length input");
const lowerEL = document.querySelector(".includes .lowercase-letters input");
const upperEL = document.querySelector(".includes .uppercase-letters input");
const numbersEL = document.querySelector(".includes .numbers input");
const symbolsEL = document.querySelector(".includes .symbols input");
const generateEL = document.querySelector(".generate-pass");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%%^&*()_+=";
let password = "";

function getRandom(string) {
  return string.charAt(Math.floor(Math.random() * string.length));
}

function generatePassword() {
  const len = lengthEL.value;
  password = "";

  for (let i = 0; i < len; i++) {
    const x = getX();
    password += x;
  }

  pwEL.innerText = password.replace(/\s/g, "");
}

function isSpecial(char) {
  for (let i = 0; i < symbols.length; i++) {
    if (char === symbols[i]) {
      return true;
    }
  }
}

function copyDivToClipboard() {
  var range = document.createRange();
  range.selectNode(document.querySelector("#result h2"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Copied to clipboard");
}

function getX() {
  let x = "";

  if (lowerEL.checked) {
    x += getRandom(lowercase);
  }

  if (upperEL.checked) {
    x += getRandom(uppercase);
  }

  if (numbersEL.checked) {
    x += getRandom(numbers);
  }

  if (symbolsEL.checked) {
    x += getRandom(symbols);
  }

  if (
    !lowerEL.checked &&
    !upperEL.checked &&
    !numbersEL.checked &&
    !symbolsEL.checked
  ) {
    x = getRandom(uppercase + lowercase + numbers + symbols);
  }

  let r = getRandom(x);
  if (isSpecial(r) && isSpecial(password[password.length - 1])) {
    return getX();
  } else {
    return r;
  }
}

generateEL.addEventListener("click", generatePassword);
copyEL.addEventListener("click", copyDivToClipboard);
