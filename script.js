"use sctrict";

let btn = document.getElementById("btn");
btn.addEventListener("click", getPass);

function getPass () {
  // get element paragraph
  let p = document.getElementById("newPass");
  p.textContent = "";
  // get login
  let login = document.getElementById("login").value;
  login = login.toLowerCase();
  let output = "";
  for(let i = 0; i < login.length; i++) {
    if(login[i] === "a") {
      output += "4";
    } else if(login[i] === "e") {
      output += "3";
    } else if(login[i] === "i") {
      output += "1";
    } else if(login[i] === "o") {
      output += "0";
    } else {
      output += login[i];
    };
  };
  let latin = 0;
  for(let j = 65; j < 220; j++) {
    for(let k = 0; k < output.length; k++) {
      if(String.fromCodePoint(j) === output[k]) {
        latin++;
      }
    }
  }
  // get password
  let abc = "a1b2c3d4e5f6g7h8i9j0k!l!m1n2o3p4q5r6s&7t8u9v0w!x_#yz";
  let randomStr = "";
  let passNum = document.getElementById("numberOfPass");
  let passLength = +passNum.value;
  
  for(let i = 0; i < passLength; i++) {
    randomStr += abc[Math.floor(Math.random() * abc.length)];
  }
  if(randomStr.length <= 0 || latin === 0) {
    alert("Please, enter a name by latin letters and in the string of numbers enter the number ;)");
  } else if(randomStr.length < 6) {
    p.textContent = `Your cool login: ${output}, your new password is too short: ${randomStr}`;
    p.style.borderRadius = "10px";
    p.style.backgroundColor = "green";
  } else if(randomStr.length > 15) {
    p.textContent = `Your cool login: ${output}, your new password is too long: ${randomStr}`;
    p.style.borderRadius = "10px" ;
    p.style.backgroundColor = "green";
  } else {
    p.textContent = `Your cool login: "${output}", your strong password: "${randomStr}"`;
    p.style.borderRadius = "10px";
    p.style.backgroundColor = "white";
  }
};