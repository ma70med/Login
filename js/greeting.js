// DOM Values
var userNameInput = document.getElementById("userName");
var logoutBtn = document.getElementById("logoutBtn");
var greetingName = document.querySelector("h1");

var box = [];

var user = [];

if (localStorage.getItem("key") != null) {
  box = JSON.parse(localStorage.getItem("key"));
}

if (localStorage.getItem("name") != null) {
  user = JSON.parse(localStorage.getItem("name"));
}

greetingName.innerHTML = `Welcome ${user}`;

logoutBtn.addEventListener("click", function () {
  logoutBtn.setAttribute("href", "/index.html");
});
