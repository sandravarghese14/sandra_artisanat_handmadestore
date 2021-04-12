
function login(){
    var username= document.getElementById("username");
    var password =document.getElementById("pws");
    
    if((username.value == "admin" )&&( password.value == "12345")){
     return true;
     }
    else{
        alert("Authentication failed!");
     return false;
    
    }
    }
    