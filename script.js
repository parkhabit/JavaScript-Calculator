var box = document.getElementById('display');

function toScreen(x){
  if (x==='c'){
    box.value='';
  } else {
    box.value+=x;
  }
}


function answer(){
  x=box.value
  x=eval(x);
  box.value=x;
}

function backspace(){
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  box.value = newNum;
}
