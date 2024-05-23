//Function to perform task mentioned in 1.iii
//Either navigate to index.html on successful registration 
//Or display an appropriate message on invalid input values.
function register(){
    //Select the input element with id "username"
    var username = document.getElementById("username");
    //Select the input element with id "email"
    var email = document.getElementById("email");
    //Select the input element with id "pwd-repeat"
    var repeatPwd = document.getElementById("pwd-repeat");
    //Perform check if either username or email id or password fields has "form-control invalid" classname and accordingly take action
    if(username.className== "form-control invalid" || email.className == "form-control invalid" || repeatPwd.className == "form-control invalid"){
        document.getElementById("formMsg").innerHTML="<b>Please fill all form values correctly</b>";
        document.getElementById("formMsg").style.color = "red";
        //Additional (No points for the following statement)
        username.className == "form-control invalid" ? username.focus() : email.className == "form-control invalid" ? email.focus():repeatPwd.focus();        
    }
    else{
        alert("Thank you for registering with us!");      
        window.location.href="../user_view/index.html"
    }
}

//Function to perfom task mentioned in 2.i and 2.ii
function signin(){
    //Select the value of input element with id "username"
    var username = document.getElementById("username").value;
    //Select the value of input element with id "pwd"
    var pwd = document.getElementById("pwd").value;
    //Code to authenticate username and password
    //Check if username provided is "great"
    if(username=="great"){
        //Check if password provided is "learn"
        if(pwd == "learn"){
            window.location.href="../user_view/index.html";
        }
        else
        {
            document.getElementById("signinValidity").innerHTML = "<b>Invalid password</b>";
            document.getElementById("signinValidity").style.color = "red";
            //Additional (No points for the following statement)
            document.getElementById("pwd").focus();
        }
    }
    else{
        document.getElementById("signinValidity").innerHTML = "<b>Invalid username or password</b>";
        document.getElementById("signinValidity").style.color = "red";
        //Additional (No points for the following statement)
        document.getElementById("username").focus();
    }
}
