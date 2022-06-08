// 카피링크

function copyUrlOfWebSite() {
  navigator.clipboard.writeText(location.href).then(() => {
    console.log('success');
  });

  alert("링크가 복사되었습니다 붙여넣기를 통해 공유해보세요")
}

//----------브라우저 사이즈 감지

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', setScreenSize)

//----------써클텍스트------------

const circleType = new CircleType(document.getElementById('circleType'));
circleType.radius(1100);

//-------------------문제넘기기-----------------

var questNum = 0;
var next = () => {
  if (questNum == 12) {
    viewResultPage();
    var userName = document.getElementById("userName").value
    var mbti = "";
    ($("#EI").val() < 2) ? mbti += "I": mbti += "E";
    ($("#SN").val() < 2) ? mbti += "N": mbti += "S";
    ($("#TF").val() < 2) ? mbti += "F": mbti += "T";
    ($("#JP").val() < 2) ? mbti += "P": mbti += "J";
    $("#result_subtitle").html(mbtiResult[mbti]["subtitle"]);
    $("#result_title").html(mbtiResult[mbti]["title"]);
    $("#detail").html(mbtiResult[mbti]["subscription"]);
    $("#character").html(mbtiResult[mbti]["character"] + userName + "' 님과 정말 잘 어울리는 보석이네요");
    $("#result_card").css({
      'background-image': mbtiResult[mbti]["backgroundImage"]
    });
    $("#result_frame").css({
      'background-image': mbtiResult[mbti]["gemStoneFrame"]
    });
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

// ---------클릭함수----------------------
$("#ans_01").click(function () {
  // hoverFunctionA();
  let type = $("#whatType").val();
  let preValue = $("#" + type).val();
  $("#" + type).val(parseInt(preValue) + 1);
  next()
});

$("#ans_02").click(function () {
  // hoverFunctionB()
  next()
});


// -------------------화면넘기기 함수-----------------------


var main = document.getElementById("main");
var test = document.getElementById("test");
var result = document.getElementById("result");
var resultShare = document.getElementById("result_share");
var nameInput = document.getElementById("nameInput")

function startTest() {
  if (document.getElementById("userName").value == "") {
    alert("이름을 입력해주세요!")
  } else {
    nameInput.style.display = "none";
    test.style.display = "flex";
    next()
  }
}


var viewUserName = () => {
  main.style.display = "none";
  nameInput.style.display = "flex";
}

const viewResultPage = () => {
  result.style.display = "flex"
  test.style.display = "none"
  resultShare.style.display = "block"
}

//  다운로드함수
var agent = navigator.userAgent.toLowerCase();
function downImg() {
  if (agent.indexOf("safari") != -1) {
    alert("죄송합니다 가난한 방구석 개발자라 맥북을 구매하지 못해 IOS에서 다운로드가 지원되지 않습니다. 열심히 일해 맥북 구매 후 기능을 추가하겠습니다")
  } else {
    function downloadURI(uri, name) {
      var link = document.createElement("a")
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
    }
    html2canvas($("#downloadWrap")[0]).then(function (canvas) {
      var myImage = canvas.toDataURL();
      downloadURI(myImage, "my_type.jpg")
    });
  }



}