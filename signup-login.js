// Define regular expressions
const usernameRegex = /^[a-zA-Z0-9]{5,}$/; // At least 5 characters, letters and numbers
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Valid email format
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 8 characters, letters and numbers

function validationName(){
    var username = document.getElementById("name").value;
    var userInput = document.getElementById("name")
    if(!usernameRegex.test(username)){
        userInput.style.borderColor = "red";
    }
    else{
        userInput.style.borderColor ="green";
    }
}

function validationEmail(){
    var email = document.getElementById("email").value;
    var emailInput = document.getElementById("email")
    if(!emailRegex.test(email)){
        emailInput.style.borderColor = "red";
    }
    else{
        emailInput.style.borderColor ="green";
    }
}

function validationPassword(){
    var password = document.getElementById("password").value;
    var passwordInput = document.getElementById("password")
    if(!passwordRegex.test(password)){
        passwordInput.style.borderColor = "red";
    }
    else{
        passwordInput.style.borderColor ="green";
    }
}

function Register(){
    var username = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;



    if(!usernameRegex.test(username)){
        alert("Invalid Username");
        return;
    }
    if(!emailRegex.test(email)){
        alert("Invalid Email");
        return;
    }
    if(!passwordRegex.test(password)){
        alert("Invalid Password");
        return;
    }
    var userData ={
        name : username ,
        email: email,
        password: password
    };
    localStorage.setItem("user",JSON.stringify(userData));


    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";




    document.getElementById("name").style.borderColor="";
    document.getElementById("email").style.borderColor="";
    document.getElementById("password").style.borderColor="";
    
alert("Sign-Up successfully");
window.location.href = "index.html";

}







function validateEmail(){
    var email = document.getElementById("loginEmail").value;
    var emailInput = document.getElementById("loginEmail")
    if(!emailRegex.test(email)){
        emailInput.style.borderColor = "red";
    }
    else{
        emailInput.style.borderColor ="green";
    }
}

function validatePassword(){
    var password = document.getElementById("loginPassword").value;
    var passwordInput = document.getElementById("loginPassword")
    if(!passwordRegex.test(password)){
        passwordInput.style.borderColor = "red";
    }
    else{
        passwordInput.style.borderColor ="green";
    }
}



function loginUser() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Check if data is in localStorage
    var storedUserData = JSON.parse(localStorage.getItem("user"));

    if (!storedUserData) {
        alert("No user data found! Please sign up.");
        return false;
    }

    // Validate email and password against localStorage data
    if (email !== storedUserData.email || password !== storedUserData.password) {
        alert("Invalid email or password. Please try again.");
        return false;
    }

    // Redirect or show success message
    alert("Login successful!");
    window.location.href = "index.html"; 

    return false; 
}