let tipValue = document.querySelector("#tip").value;


function tipCalc(){
    let tipValue = document.querySelector("#tip").value;
    let valueTip = document.querySelector(".valueTip");

    valueTip.innerText = tipValue + "%"; 
}