var userName
var getUserName = () =>{
userName = document.getElementById("userName").val
$("#userName").hide()
}
// -----------------결과JSON--------------------------


var mbtiResult = {
  "ISTJ": {
    "subtitle": "미의 여신 비너스를 상징하는",
    "title": "에메랄드",
    "subscription": "'에메랄드'는 기원전 300 - 250년에 벌써 보석으로써 가치를 인정받았을 정도로 오랜 시간 사랑을 받아온 보석이에요",
    "character": "문제를 해결하는데 과거의 경험을 잘 적용하는' " + userName + "' 님과 꼭 맞는 <br>보석이네요!",
    "backgroundImage": "url(./img/result_bg_green.jpg)",
    "gemStoneFrame": "url(./img/result_frame_green.png)",
    "gemStoneImage": "./img/gemstone1.png",
  },

  "ISTP": {
    "subtitle": "바다를 닮은 영롱한 청록빛의",
    "title": "인디콜라이트",
    "subscription": "투어멀린의 일종인 '인디콜라이트'는 국제시장에서도 굉장히 보기 드문컬러를 가진 보석이에요",
    "character": "필요 이상으로 자신을 발휘하지 않으며 합리적으로 인생을 관찰하는' " + userName + "' 님과 꼭 맞는 <br>보석이네요!",
    "backgroundImage": "url(./img/result_bg_teal.jpg)",
    "gemStoneFrame": "url(./img/result_frame_teal.png)",
    "gemStoneImage": "./img/gemstone2.png",
  },









  "ENTP": {
    "subtitle": "조명에 따라 색이 변하는",
    "title": "알렉산드라이트",
    "subscription": "'알렉산드라이트'는 태양빛 아래에서는 에메랄드, 밤의 촛불 <br>아래에서는 루비로 변하는 <br>신비한 보석이에요",
    "character": "즉흥적이고 유연하며, 순발력이 뛰어난 '" + userName + "' 님과 정말 찰떡인 <br>보석이네요!",
    "backgroundImage": "url(./img/result_bg_purple.jpg)",
    "gemStoneFrame": "url(./img/result_frame_purple.png)",
    "gemStoneImage": "./img/alexandrite.gif",
  },
}