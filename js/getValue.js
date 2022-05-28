//----------써클텍스트------------

const circleType = new CircleType(document.getElementById('circleType'));
circleType.radius(1100);


//-------------------문제넘기기-----------------
var userName = "이용자"
var questNum = 0;
var next = () => {
  if (questNum == 12) {
    viewResultPage();
    var mbti = "";
    ($("#EI").val() < 2) ? mbti += "I": mbti += "E";
    ($("#SN").val() < 2) ? mbti += "N": mbti += "S";
    ($("#TF").val() < 2) ? mbti += "F": mbti += "T";
    ($("#JP").val() < 2) ? mbti += "P": mbti += "J";
    $("#result_subtitle").html(mbtiResult[mbti]["subtitle"]);
    $("#result_title").html(mbtiResult[mbti]["title"]);
    $("#detail").html(mbtiResult[mbti]["subscription"]);
    $("#character").html(mbtiResult[mbti]["character"]);
    $("#result_card").css({'background-image': mbtiResult[mbti]["backgroundImage"]})
    $("#result_frame").css({'background-image': mbtiResult[mbti]["gemStoneFrame"]})
    $("#gemStone").attr("src", mbtiResult[mbti]["gemStoneImage"])

  } else {
    $("#sheet").html(questionSheet[questNum]["sheet"]);
    $("#whatType").val(questionSheet[questNum]["type"]);
    $("#a").html(questionSheet[questNum]["a"]);
    $("#b").html(questionSheet[questNum]["b"]);
    $(".howMuch").attr("style", "width:calc(100/12*" + (parseInt(questNum)) + "%)");
    $("#howMuchNum").html(parseInt(questNum) + 1 + "/12")
    questNum++
  }
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

//--------------------문제 JSON------------------------
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
  3: {
    "sheet": "q4",
    "type": "SN",
    "a": "a4",
    "b": "b4",
  },

  4: {
    "sheet": "q5",
    "type": "SN",
    "a": "a5",
    "b": "b5",
  },

  5: {
    "sheet": "q6",
    "type": "SN",
    "a": "a6",
    "b": "b6",
  },
  6: {
    "sheet": "q7",
    "type": "TF",
    "a": "a7",
    "b": "b7",
  },

  7: {
    "sheet": "q8",
    "type": "TF",
    "a": "a8",
    "b": "b8",
  },

  8: {
    "sheet": "q9",
    "type": "TF",
    "a": "a9",
    "b": "b9",
  },
  9: {
    "sheet": "q10",
    "type": "JP",
    "a": "a10",
    "b": "b10",
  },

  10: {
    "sheet": "q11",
    "type": "JP",
    "a": "a11",
    "b": "b11",
  },

  11: {
    "sheet": "q12",
    "type": "JP",
    "a": "a12",
    "b": "b12",
  },
}
// -----------------결과JSON--------------------------
var mbtiResult = {
  "ENTP": {
    "subtitle": "조명에 따라 색이 변하는",
    "title": "알렉산드라이트",
    "subscription": "'알렉산드라이트'는 태양빛 아래에서는 에메랄드, 밤의 촛불 <br>아래에서는 루비로 변하는 <br>신비한 보석이에요",
    "character":"즉흥적이고 유연하며, 순발력이 뛰어난 '"+userName+"' 님과 정말 찰떡인 <br>보석이네요!",
    "backgroundImage":"url(../img/result_bg_purple.jpg)",
    "gemStoneFrame": "url(../img/result_frame_purple.png)",
    "gemStoneImage":"./img/alexandrite.gif",
  }
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

const viewResultPage = () => {
  result.style.display = "flex"
  test.style.display = "none"
  resultShare.style.display = "block"
}