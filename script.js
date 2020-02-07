"use sctrict";

let btn = document.getElementById("btn");
btn.addEventListener("click", getPass);

function getPass () {
  let p = document.getElementById("newPass");
  p.textContent = "";
  let abc = "a1b2c3d4e5f6g7h8i9j0k!l!m1n2o3p4q5r6s&7t8u9v0w!x_#yz";
  let randomStr = "";
  let passNum = document.getElementById("numberOfPass");
  let passLength = +passNum.value;
  
  for(let i = 0; i < passLength; i++) {
    randomStr += abc[Math.floor(Math.random() * abc.length)];
  }
  if(randomStr.length <= 0) {
    alert("Please, enter a number ;)");
  } else if(randomStr.length < 8) {
    p.textContent = `Your new password is too short: ${randomStr}`;
    p.style.borderRadius = "10px";
    p.style.backgroundColor = "red";
  } else if(randomStr.length > 15) {
    p.textContent = `Your new password is too long: ${randomStr}`;
    p.style.borderRadius = "10px" ;
    p.style.backgroundColor = "red";
  } else {
    p.textContent = `Your new password: ${randomStr}`;
    p.style.borderRadius = "10px";
    p.style.backgroundColor = "white";
  }
};