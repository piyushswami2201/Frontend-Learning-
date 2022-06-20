
// var x= document.getElementById("button1");
// x.addEventListener("click",click);

// function click(){
//     var name=prompt("Are you sure to submit this form then, Enter your name:");
//     
// }

function validateForm(){
    let result=true;
    let email=document.forms['tshirtForm']['mail'].value;
    let name= document.forms['tshirtForm']['name'].value;
    if(name.length<5 ){
        result=false;
        alert("Name too short. Please enter at least 5 character name.");
    }

    if(email.slice(-14)!="@accenture.com"){
        result=false;
        alert("Please enter your accenture id.");

    }
    
    alert("Thankyou")

      

    return result;

}
