//----------써클텍스트------------

const circleType = new CircleType(document.getElementById('circleType'));
const result_subtitle = new CircleType(document.getElementById('result_subtitle'));
const result_title = new CircleType(document.getElementById('result_title'));
circleType.radius(1100);
result_title.radius(900)
result_subtitle.radius(300)


//-------------------문제넘기기-----------------

var questNum = 0;
var next = () => {
  $("#sheet").html(questionSheet[questNum]["sheet"]);
  $("#whatType").val(questionSheet[questNum]["type"]);
  $("#a").html(questionSheet[questNum]["a"]);
  $("#b").html(questionSheet[questNum]["b"]);
  $(".howMuch").attr("style", "width:calc(100/12*" + (parseInt(questNum)) + "%)");
  $("#howMuchNum").html(parseInt(questNum)+1+"/12")
  questNum++
};

$("#ans_01").click(function () {
  let type = $("#whatType").val();
  let preValue = $("#" + type).val();
  $("#" + type).val(parseInt(preValue) + 1);
  next()
});

$("#ans_02").click(function () {
  next()
});

//--------------------제이슨-------------------------
var questionSheet = {
  0: {
    "sheet": "첫 만남에 느낌이 좋았던 그 사람! 이후 연락이 오지않는다면?",
    "type": "EI",
    "a": "먼저 연락해서 시간있냐고 물어본다",
    "b": "자존심이 허락안해... 그냥 지나간다",
  },

  1: {
    "sheet": "q2",
    "type": "EI",
    "a": "a2",
    "b": "b2",
  },

  2: {
    "sheet": "q3",
    "type": "EI",
    "a": "a3",
    "b": "b3",
  },
}


// -------------------화면넘기기 함수-----------------------


var main = document.getElementById("main");
var test = document.getElementById("test");
var result = document.getElementById("result");
var resultShare = document.getElementById("result_share");


var startTest = () => {
  main.style.display = "none";
  test.style.display = "flex";
  next();
}

const backToMain = () => {
  main.style.display = "flex";
  test.style.display = "none";
}

const viewResult=()=>{
  result.style.display="flex"
  test.style.display="none"
  resultShare.style.display="block"
}
