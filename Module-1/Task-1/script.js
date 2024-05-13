function validnumber(){
    let num=document.forms["Resform"]["num"].value;

    if(num.length !=10){
        alert("Enter valid contact number");
    }
    return
}