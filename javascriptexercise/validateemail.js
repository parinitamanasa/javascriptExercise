var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email = "parinita.manasa@gmail.com";

function validatemail(){
    if(email.match(regex)){
        console.log("Yes!mail id is valid");
    }
    else{
        console.log("No! email id is invalid");
    }
}
validatemail();