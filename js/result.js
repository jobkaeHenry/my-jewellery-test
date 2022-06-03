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

  "ISFJ": {
    "subtitle": "파라오의 사랑,",
    "title": "페리도트",
    "subscription": "기원전 1500년 전에서부터 이집트 파라오의 명령으로 채굴되던 페리도트는 8월의 탄생석이기도 합니다.",
    "character": "과거 회상을 좋아하며, 남들이 기억하기 힘든 세세한 추억까지 간직하는' " + userName + "' 님과 어울리지않나요?",
    "backgroundImage": "url(./img/result_bg_green.jpg)",
    "gemStoneFrame": "url(./img/result_frame_green.png)",
    "gemStoneImage": "./img/gemstone3.png",
  },

  "ISFP": {
    "subtitle": "석류석의 꽃,",
    "title": "디멘토이드",
    "subscription": "'디멘토이드'는 석류석의 꽃에 해당되는 가장 가치 있는 보석으로 마치 다이아몬드와 같은 빛을 낸답니다",
    "character": "미루고 미뤄 오랜 기간이 걸리더라도 끝내 예술의 꽃을 피워내는' " + userName + "'님과 너무 잘 어울리는 보석이네요 ",
    "backgroundImage": "url(./img/result_bg_green.jpg)",
    "gemStoneFrame": "url(./img/result_frame_green.png)",
    "gemStoneImage": "./img/gemstone4.png",
  },

  "INTJ": {
    "subtitle": "지혜를 상징하는 보석,",
    "title": "사파이어",
    "subscription": "고대 사람들은 하늘이 거대한 사파이어이고, 지구가 그 안에 박혀있다는 낭만적인 믿음을 가지고있었답니다",
    "character": "끊임없이 지식을 탐구하고 '평범'보다는 '비범'이라는 말이 어울리는 ' " + userName + "' 님과 어울리는 보석이에요",
    "backgroundImage": "url(./img/result_bg_blue.jpg)",
    "gemStoneFrame": "url(./img/result_frame_teal.png)",
    "gemStoneImage": "./img/gemstone5.png",
  },

  "INTP": {
    "subtitle": "보랏빛 아름다움,",
    "title": "자수정",
    "subscription": "자수정의 보라색은 귀족을 상징하는 돌로 귀하게 여겨졌으며, 중세 왕관을 장식하는 귀한 보석으로 사용됬어요",
    "character": "' " + userName + "' ",
    "backgroundImage": "url(./img/result_bg_purple.jpg)",
    "gemStoneFrame": "url(./img/result_frame_purple.png)",
    "gemStoneImage": "./img/gemstone6.png",
  },

  "INFJ": {
    "subtitle": "보석의 왕, 선명한 붉은색의",
    "title": "루비",
    "subscription": "타오르는 불꽃같은 사랑을 상징하는 루비는 그 강렬한 붉은빛에 한번 빠지면 쉽게 헤어나오기 힘들 정도에요",
    "character": "' " + userName + "' ",
    "backgroundImage": "url(./img/result_bg_pink.jpg)",
    "gemStoneFrame": "url(./img/result_frame_pink.png)",
    "gemStoneImage": "./img/gemstone7.png",
  },
  "INFP": {
    "subtitle": "적색의 풍요로움,",
    "title": "루벌라이트",
    "subscription": "자칫 올드해 보일 수 있는 강렬한 붉은색의 루비와는 다르게 루벌라이트는 적색, 자색, 분홍색이 조화롭게 섞여있는 보석이에요",
    "character": "' " + userName + "' ",
    "backgroundImage": "url(./img/result_bg_pink.jpg)",
    "gemStoneFrame": "url(./img/result_frame_pink.png)",
    "gemStoneImage": "./img/gemstone8.png",
  },
  "ESTJ": {
    "subtitle": "모든 색을 가진 보석",
    "title": "블루오팔",
    "subscription": "바라보는 각도에 따라 오묘하게 색이 변하는 오팔, 그 중에서도 블루 오팔은 굉장히 희귀한 보석이에요",
    "character": "' " + userName + "' ",
    "backgroundImage": "url(./img/result_bg_blue.jpg)",
    "gemStoneFrame": "url(./img/result_frame_blue.png)",
    "gemStoneImage": "./img/gemstone9.png",
  },
  "ESTP": {
    "subtitle": "푸른 바다를 품은 보석,",
    "title": "아쿠아마린",
    "subscription": "'아쿠아마린'이라는 이름만 들어도 푸른 바다가 연상되는 아쿠아마린은 바다와 관련된 많은 전설을 가진 보석이에요",
    "character": "' " + userName + "' ",
    "backgroundImage": "url(./img/result_bg_blue.jpg)",
    "gemStoneFrame": "url(./img/result_frame_blue.png)",
    "gemStoneImage": "./img/gemstone10.png",
  },

  "ESFJ": {
    "subtitle": "상큼한 레몬빛의,",
    "title": "시트린",
    "subscription": "이름만 들어도 상큼한 노란빛의 '시트린'은, 수정 종류 중 가장 비싼 보석이고, 가장 인기있는 수정이에요",
    "character": "' " + userName + "' ",
    "backgroundImage": "url(./img/result_bg_orange.jpg)",
    "gemStoneFrame": "url(./img/result_frame_orange.png)",
    "gemStoneImage": "./img/gemstone11.png",
  },
  "ESFP": {
    "subtitle": "태양을 닮은 보석,",
    "title": "썬스톤",
    "subscription": "태양을 닮은, 태양을 담은 보석인 썬스톤은 보는 방향에 따라 주황빛으로 반짝이는 따뜻한 느낌의 보석이에요",
    "character": "' " + userName + "' ",
    "backgroundImage": "url(./img/result_bg_orange.jpg)",
    "gemStoneFrame": "url(./img/result_frame_orange.png)",
    "gemStoneImage": "./img/gemstone12.png",
  },

  "ENTJ": {
    "subtitle": "검은 대륙의 푸른별,",
    "title": "탄자나이트",
    "subscription": "우아한 청색빛의 '탄자나이트'는 이름에서 알 수 있듯, 지구상 오직 아프리카 탄자니아에서만 산출되는 귀한 보석이에요",
    "character": "' " + userName + "' ",
    "backgroundImage": "url(./img/result_bg_purple.jpg)",
    "gemStoneFrame": "url(./img/result_frame_purple.png)",
    "gemStoneImage": "./img/gemstone13.png",
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
  "ENFJ": {
    "subtitle": "사랑과 치유의보석,",
    "title": "쿤자이트",
    "subscription": "분홍색과 보라색의 조화가 아름다운 '쿤자이트'는 비교적 최근인 1902년에 발견된 신비로운 보석이에요",
    "character": "' " + userName + "' ",
    "backgroundImage": "url(./img/result_bg_pink.jpg)",
    "gemStoneFrame": "url(./img/result_frame_pink.png)",
    "gemStoneImage": "./img/gemstone15.png",
  },
  "ENFP": {
    "subtitle": "장미를 닮은 보석,",
    "title": "잉카로즈",
    "subscription": "이름에서 알 수 있듯 아름다운 장미빛을 가진 잉카로즈의 본명은 '로도크로사이트'에요 잉카로즈 특유의 문양이 매력포인트랍니다",
    "character": "' " + userName + "' ",
    "backgroundImage": "url(./img/result_bg_pink.jpg)",
    "gemStoneFrame": "url(./img/result_frame_pink.png)",
    "gemStoneImage": "./img/gemstone16.png",
  },
}
