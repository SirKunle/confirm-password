function checkpassword(){
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    
    let message = document.getElementById("message");

    if(password.lenght != 0){
        if (password == confirm_password){
            message.textContent = "Password Match";
            message.style.backgroundColor ="#3ae374"
        }
        else{
            message.textContent = "Password Don't match";
            message.style.backgroundColor = "#ff4d4d"
        }
    }
    else{
        alert("Password can't be empty");
        message.testContent = "";
    }
}