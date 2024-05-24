//Function to validate email id
function validateEmail(){
    //Select the input element with id "email"
    var email = document.getElementById("email");
    //Code to perform validations on the email value entered by user
    if (email.value.indexOf("@") !== -1 && email.value.lastIndexOf(".") > email.value.indexOf("@")){
        //Check if the last "." symbol is not too close to the end of the email
        if (email.value.lastIndexOf(".") < email.value.length - 2) {
            document.getElementById("emailValidity").innerHTML = "Valid email address!";
            document.getElementById("emailValidity").style.color="green";
            email.className ="form-control valid";
        }
        else{
            document.getElementById("emailValidity").innerHTML = "Invalid email address!";
            document.getElementById("emailValidity").style.color="red";
            email.className ="form-control invalid";
        }
    }
    else{
            document.getElementById("emailValidity").innerHTML = "Invalid email address!";
            document.getElementById("emailValidity").style.color="red";
            email.className ="form-control invalid";
    }
}

//Function to validate username mentioned in task 1.i
function validateUserName(){
    //Select the input element with id "username"
    var username = document.getElementById("username");
    var usernameValidityPara = document.getElementById("usernameValidity");
    if(username.value == "great"){
        usernameValidityPara.innerHTML = "OK";
        usernameValidityPara.style.color="green";
        username.className ="form-control valid";
    }
    else{
        usernameValidityPara.innerHTML = "Incorrect Username";
        usernameValidityPara.style.color="red";
        username.className ="form-control invalid";
    }    
}

//Function to validate password mentioned in task 1.ii
function validatePwd(){
    //Select the input element with id "pwd"
    var pwd = document.getElementById("pwd");
    //Select the input element with id "pwd-repeat"
    var repeatPwd = document.getElementById("pwd-repeat");
    //Code to perform validations on the password and repeat password values entered by user
    var pwdValidityPara = document.getElementById("pwdValidity");
    //Check if both the passwords provided are "learn"
    if(repeatPwd.value == pwd.value && pwd.value == "learn"){
        pwdValidityPara.innerHTML = "OK";
        pwdValidityPara.style.color="green";
        repeatPwd.className ="form-control valid";
    }
    else{
        pwdValidityPara.innerHTML = "Incorrect Password";
        pwdValidityPara.style.color="red";
        repeatPwd.className ="form-control invalid";
    }
}