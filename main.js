
function tipCalc(){
    
    let tipValue = document.querySelector("#tip").value;
    let valueTip = document.querySelector(".valueTip");
    
    valueTip.innerText = tipValue + "%"; 
    
    let total = document.querySelector(".total");
    let valueBill = document.querySelector("#valueBill").value;
    
    let totalBill = parseInt(valueBill) + parseInt(tipValue);

    total.innerText = "$" + totalBill;




}