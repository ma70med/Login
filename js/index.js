// DOM Values
var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");
var loginBtn = document.getElementById("loginBtn");
var fillingMsg = document.querySelector(".fillingMsg");
var correctMsg = document.querySelector(".correctMsg");

var box = [];
var user = [];

if (localStorage.getItem("key") != null) {
  box = JSON.parse(localStorage.getItem("key"));
}

// Login Page
loginBtn.addEventListener("click", function () {
  vaild();
  if (checkData()) {
    loginBtn.setAttribute("href", "greeting.html");
  }
});

// Function for Clearaing the Inputs
function clearInputs() {
  userNameInput.value = null;
  userEmailInput.value = null;
  userPasswordInput.value = null;
}

function checkData() {
  for (var i = 0; i < box.length; i++) {
    if (
      box[i].userEmail == userEmailInput.value &&
      box[i].userPassword == userPasswordInput.value
    ) {
      user.push(box[i].userName);
      localStorage.setItem("name", JSON.stringify(user));
      return true;
    }
  }
}

// Validaton on Sign In
function vaild() {
  var reg1 =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var reg2 = /^[0-9]{3,10}$/;

  if (userEmailInput.value == "" || userPasswordInput.value == "") {
    fillingMsg.classList.remove("d-none");
    correctMsg.classList.add("d-none");
    return false;
  } else if (
    reg1.test(userEmailInput.value) == false &&
    reg2.test(userPasswordInput.value) == false
  ) {
    correctMsg.classList.remove("d-none");
    fillingMsg.classList.add("d-none");

    return false;
  }
}
