const calculatorcontainer = document.getElementById("calculator_container");
const displayarea = document.getElementById("display_area");
calculatorcontainer.addEventListener(`click`,(e) => {

if (e.target.nodeName === "BUTTON"){
switch(e.target.textContent){
    case `c`:
        clear();
        break;
    case `Del`:
        deleteonevalue();
        break;
    case `=`:
        evaluate();
        break;
    default:
        addtodisplayarea(e.target.textContent);

}
}

});

function clear() {
    displayarea.textContent="";
}
function addtodisplayarea(value){
displayarea.textContent=displayarea.textContent+value;

}

function deleteonevalue(){

let current = displayarea.textContent;
displayarea.textContent = current.substring(0,
 current.length-1);

}
function evaluate(){
    try{
let calculation = eval(displayarea.textContent);
displayarea.textContent=calculation;
    }
catch (error){
displayarea.textContent=`invalid operation`;
console.error(error);
}

}
























