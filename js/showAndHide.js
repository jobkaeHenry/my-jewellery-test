
var main = document.getElementById("main");
var test = document.getElementById("test");
// var ansBtn = document.getElementsByClassName("ans_button")
// var lfAngle = document.getElementById("left_angle")
// var riAngle = document.getElementById("right_angle")

const startTest=()=>{
  main.style.display="none";
  test.style.display="flex";
}

const backToMain=()=>{
  main.style.display="flex";
  test.style.display="none";
}

// const mouseHover=()=>{
//     lfAngle.style.backgroundImage="url(../img/left_angle_filled.svg)"
//     riAngle.style.backgroundImage="url(../img/right_angle_filled.svg)"
// }

// const mouseOut=()=>{
//   lfAngle.style.backgroundImage="url(../img/left_angle.svg)"
//   riAngle.style.backgroundImage="url(../img/right_angle.svg)"
// }