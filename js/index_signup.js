// DOM Values
var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");
var signBtn = document.getElementById("signBtn");
var fillingMsg = document.querySelector(".fillingMsg");
var repeatMsg = document.querySelector(".repeatMsg");
var correctMsg = document.querySelector(".correctMsg");
var successMsg = document.querySelector(".successMsg");

var box = [];

if (localStorage.getItem("key") != null) {
  box = JSON.parse(localStorage.getItem("key"));
}

// Sign Up Page
signBtn.addEventListener("click", function () {
  if (repeatData()) {
    repeatMsg.classList.remove("d-none");
    correctMsg.classList.add("d-none");
    fillingMsg.classList.add("d-none");
  } else if (vaild()) {
    var userData = {
      userName: userNameInput.value,
      userEmail: userEmailInput.value,
      userPassword: userPasswordInput.value,
    };
    box.push(userData);
    localStorage.setItem("key", JSON.stringify(box));
    repeatMsg.classList.add("d-none");
    correctMsg.classList.add("d-none");
    successMsg.classList.remove("d-none");
  }

  clearInputs();
});

// Function for Clearaing the Inputs
function clearInputs() {
  userNameInput.value = null;
  userEmailInput.value = null;
  userPasswordInput.value = null;
}

// Validaton on Sign Up
function vaild() {
  var reg1 = /^\w{3,}$/;
  var reg2 =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var reg3 = /^[0-9]{3,10}$/;

  if (
    userNameInput.value == "" ||
    userEmailInput.value == "" ||
    userPasswordInput.value == ""
  ) {
    fillingMsg.classList.remove("d-none");
    correctMsg.classList.add("d-none");
    repeatMsg.classList.add("d-none");
    successMsg.classList.add("d-none");
    return false;
  } else if (
    reg1.test(userNameInput.value) == false &&
    reg2.test(userEmailInput.value) == false &&
    reg3.test(userPasswordInput.value) == false
  ) {
    correctMsg.classList.remove("d-none");
    fillingMsg.classList.add("d-none");
    repeatMsg.classList.add("d-none");
    successMsg.classList.add("d-none");

    return false;
  } else if (
    reg1.test(userNameInput.value) &&
    reg2.test(userEmailInput.value) &&
    reg3.test(userPasswordInput.value)
  ) {
    correctMsg.classList.add("d-none");
    fillingMsg.classList.add("d-none");
    repeatMsg.classList.add("d-none");
    // successMsg.classList.remove("d-none");

    return true;
  }
}

// Repeated Data
function repeatData() {
  for (var i = 0; i < box.length; i++) {
    if (
      box[i].userName == userNameInput.value &&
      box[i].userEmail == userEmailInput.value &&
      box[i].userPassword == userPasswordInput.value
    ) {
      indexName.push(box[i].userName);
      return true;
    }
  }
}
