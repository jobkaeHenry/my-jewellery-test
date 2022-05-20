var main = document.getElementById("main");
var test = document.getElementById("test");

const startTest=()=>{
  main.style.display="none";
  test.style.display="flex";
}

const backToMain=()=>{
  main.style.display="flex";
  test.style.display="none";
}