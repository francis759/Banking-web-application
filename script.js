function createDefaultAccount(){
    localStorage.setItem("username","Admin");
    localStorage.setItem("password","admin");
}
function loginIn(){
    let username = document.getElementById("Username-holder").value;
    let password = document.getElementById("password-holder").value;
    //
    if(username === localStorage.getItem("username") && password === localStorage.getItem("password")){
        window.alert("Login Successful");
        location.href="home.html";
    }
    else if(username === "" && password === ""){
        window.alert("Please enter username and password");
    }
    else{
        window.alert("Invalid entry. Please try again");
    }
}