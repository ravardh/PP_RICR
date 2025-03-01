const lb1 = document.getElementById("col1");
const lb2 = document.getElementById("col2");
const lb3 = document.getElementById("col3");

const D = document.getElementById("con1");
const H = document.getElementById("h1");
const P = document.getElementById("p");

lb1.addEventListener("mouseover", changecolr1);
lb2.addEventListener("mouseover", changecolr2);
lb3.addEventListener("mouseover", changecolr3);


lb1.addEventListener("mouseout", restcolr)
lb2.addEventListener("mouseout", restcolr)
lb3.addEventListener("mouseout", restcolr)

function changecolr1() {
  D.style.backgroundColor = "gray";
  H.style.color = "blue";
  P.style.color = "skyblue";
}

function changecolr2() {
  D.style.backgroundColor = "yellow";
  H.style.color = "red";
  P.style.color = "orange";
}
function changecolr3() {
  D.style.backgroundColor = "violet";
  H.style.color = "peachpuff";
  P.style.color = "green";
}


function restcolr(){
  D.style.backgroundColor = "white";
  H.style.color = "black";
  P.style.color = "black";
}