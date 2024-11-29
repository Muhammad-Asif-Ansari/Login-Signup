
var inputName = document.getElementById("inputName")
var inputPassword = document.getElementById("inputPassword")
function signup(){
    // console.log(userName.value);
    // console.log(password.value);
localStorage.setItem("inputName",inputName.value)
localStorage.setItem("inputPassword",inputPassword.value)
inputName.value = ""
inputPassword.value = ""
}