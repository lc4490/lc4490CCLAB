x=0
function showAlert(){
  x+= 20;
  let b = document.getElementById('box');
  b.innerHTML = "POGGERS";
  b.style.left = x+"px";
  b.style.backgroundColor = "rgb(255,40,32)";
}

function addDiv(){
  // create elemeent
  let elem = document.createElement("div");
  // change element properties
  elem.style.backgroundColor = "gray";
  elem.style.width = "50px";
  elem.style.height = " 50px";
  elem.style.margin = "30px";
  // attach element to the document
  let myBox = document.getElementById('box');
  myBox.appendChild(elem);
}
