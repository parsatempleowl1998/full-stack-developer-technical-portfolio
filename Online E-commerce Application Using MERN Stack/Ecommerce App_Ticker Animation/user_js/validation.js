function validateEmail(){
    let email = document.getElementById("email");
    var validRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.value.match(validRegex)) {
        document.getElementById("emailValidity").innerHTML = "Valid email address!";
        email.className ="form-control valid";
    } else {
        document.getElementById("emailValidity").innerHTML = "Invalid email address!";
        email.className ="form-control invalid";
    }
}
function validatePwd(){
    let pwd = document.getElementById("pwd");
    let repeatPwd = document.getElementById("pwd-repeat");
    let pwdValidityPara = document.getElementById("pwdValidity");
    if(repeatPwd.value == pwd.value){
        pwdValidityPara.innerHTML = "OK";
        repeatPwd.className ="form-control valid";
    }
    else{
        pwdValidityPara.innerHTML = "Incorrect Password";
        repeatPwd.className ="form-control invalid";
    }
}