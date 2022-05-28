let counterElement=document.getElementById("hi")
let head=document.getElementById("head")

head.style.textDecoration="underline"


function Increment(){
    let previouCounterValue=counterElement.textContent;
    let updateCounterValue=parseInt(previouCounterValue)+1;
    counterElement.textContent=updateCounterValue;
    
    if (updateCounterValue >0){
        counterElement.style.color="green"
    }
    else if (updateCounterValue < 0){
        counterElement.style.color="Red"
    }
    else {
        counterElement.style.color="Red"
    }
    
   

}
function reset(){
    counterElement.textContent=0;
    counterElement.style.color="black"

}
function Decrement(){
    let previouCounterValue=counterElement.textContent;
    let updateCounterValue=parseInt(previouCounterValue)-1;
    counterElement.textContent=updateCounterValue;

    if (updateCounterValue >0){
        counterElement.style.color="green"
    }
    else if (updateCounterValue < 0){
        counterElement.style.color="Red"
    }
    else {
        counterElement.style.color="Red"
    }
    
}