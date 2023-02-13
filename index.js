var countEL=document.getElementById("count-element");
var saveEl=document.getElementById("saved-element");
var count=0;
function increment(){
    count++;
    countEL.textContent=count;
}
function save(){
    let countString= count+" - ";
    saveEl.textContent+=countString;
    count=0;
    countEL.textContent=count;
}