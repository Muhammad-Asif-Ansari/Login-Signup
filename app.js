var inputName = document.getElementById("inputName")
var inputPassword = document.getElementById("inputPassword")
function signup(){
    // console.log(userName.value);
    // console.log(password.value);
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
        title: "Oops...",
        text: "Login Failed!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
}}