
function doS(val){
  calcscreen.value += val;
}

function evalE(){
  try{
    calcscreen.value = eval(calcscreen.value);
  }
  catch{
    alert('Invalid Expression');
    calcscreen.value = ""
  }
  
}

function del_Left(){
  calcscreen.value = calcscreen.value.slice(0,-1);
}

function del_AC(){
  calcscreen.value = '';
}