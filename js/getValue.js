$("#ans_01").click(function(){
  var type = $("#whatType").val();
  var preValue = $("#"+type).val();
  $("#"+type).val(parseInt(preValue)+1);
  next()
});

$("#ans_02").click(function(){
  next()
});

var questNum = 0;
var next=()=>{
  $(".howMuch").attr("style","width:calc(100/12*"+(parseInt(questNum))+"%)")
  $("#question").html(questionSheet[questNum]["question"]);
  $("#whatType").val(questionSheet[questNum]["type"]);
  $("#a").html(questionSheet[questNum]["a"]);
  $("#b").html(questionSheet[questNum]["b"]);
  questNum++;
};


var questionSheet = {
  0: {
    "question": "첫 만남에 느낌이 좋았던 그 사람! 이후 연락이 오지않는다면?",
    "type": "EI",
    "a": "먼저 연락해서 시간있냐고 물어본다",
    "b": "자존심이 허락안해... 그냥 지나간다"
  },
  
  1: {
    "question": " parapara",
    "type": "EI",
    "a": "에라모르겟다",
    "b": "진짜모르겠네"
  },

  2: {
    "question": "첫 만남에 ! 이후 연락이 오지않느낌이 좋았던 그 사람는다면?",
    "type": "EI",
    "a": "먼저 락해서 시간있연냐고 물어본다",
    "b": "자락안해... 그냥존심이 허 지나간다"
  },
}