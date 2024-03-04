// Faitico's calcultor

const disp = document.getElementById('display');
let ws = "";
function addToDisply(display, input = none) {
    disp.value += display;
    ws += input
};

function clearAll(){
    disp.value ="";
    ws = ""
};

function calculate(){
    try{
        disp.value = eval(ws)
     }  catch(error){
        disp.value = "Error";
        ws = "Error";
     }

};
function backspace() {
    const val = disp.value;
    disp.value = val.slice(0, -1)
    ws = ws.slice(0, -1)
};