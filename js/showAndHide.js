// 화면넘기기
var main = document.getElementById("main");
var test = document.getElementById("test");
var result = document.getElementById("result");
var resultShare = document.getElementById("result_share");


const startTest=()=>{
  main.style.display="none";
  test.style.display="flex";
  next()
}

const backToMain=()=>{
  main.style.display="flex";
  test.style.display="none";
}

const viewResult=()=>{
  result.style.display="flex"
  test.style.display="none"
  resultShare.style.display="block"
}

// 마우스오버
var lfAngle = document.getElementsByClassName("left_angle");
var riAngle = document.getElementsByClassName("right_angle");

function mouseHover(){
    lfAngle.className="left_angle_filled"
    riAngle.className="right_angle_filled"
}
