var inputName = document.getElementById("inputName")
var inputPassword = document.getElementById("inputPassword")
function signup(){
    if (inputName.value.trim() === "" || inputPassword.value.trim() === "") {
        Swal.fire({
          icon: "error",
          title: "Empty Fields!",
          text: "Please fill in all fields before signing up.",
        });
        return;
      }
localStorage.setItem("inputName",inputName.value)
localStorage.setItem("inputPassword",inputPassword.value)
inputName.value = ""
inputPassword.value = ""
Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Sign Up Successfully",
    showConfirmButton: false,
    timer: 1500
  })
}


function login(){
var userName = document.getElementById("userName").value
var password = document.getElementById("password").value
var inputValue = localStorage.getItem("inputName")
var inputValuePassword = localStorage.getItem("inputPassword")

if (userName.trim() === "" || password.trim() === "") {
    Swal.fire({
      icon: "error",
      title: "Empty Fields!",
      text: "Please fill in all fields before logging in.",
    });
    return; // Stop further execution
  }

if(userName === inputValue && password === inputValuePassword ){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500
      })      
}
else{
    Swal.fire({
        icon: "error",
        title: "Invalid Email or Password",
        text: "Login Failed!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}}



