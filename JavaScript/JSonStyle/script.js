function red() {
  document.getElementById("con1").style.backgroundColor = "red";
}

function green() {
  document.getElementById("con1").style.backgroundColor = "green";
}

function blue() {
  document.getElementById("con1").style.backgroundColor = "blue";
}

function dark() {
  document.getElementById("con1").classList.add("dark");
}

function light() {
  document.getElementById("con1").classList.remove("dark");
}

function changetheme() {
  document.getElementById("con1").classList.toggle("dark");
  const mode = document.getElementById("theme");

  console.log(mode);

  if (mode.innerText === "Dark theme") {
    mode.innerText = "Light theme";
  } else {
    mode.innerText = "Dark theme";
  }
}



function changeColor(color){
    document.getElementById("con1").style.backgroundColor = color;
}



function changehead(color){
    document.getElementById("h1").style.color = color;
}



function changeback(color){
    document.getElementById("con1").style.backgroundColor = color;
}


function changetext(color){
    document.getElementById("p").style.color = color;
}