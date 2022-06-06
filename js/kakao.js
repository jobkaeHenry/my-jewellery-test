  Kakao.init('d63a2454b6b5f2aa928a43fdee5ff8e0');

  function sendLink() { // 카카오톡 공유하기
    Kakao.Link.sendDefault({
      objectType: 'text',
      text: '[나만의 보석테스트] 인싸들의 필수코스! 나와 꼭 맞는 아름다운 보석을 간단한 심리테스트로 찾아보아요',
      link: {
        mobileWebUrl: 'https://jobkaehenry.github.io/what-am-i-toy-project-/',
        webUrl: 'https://jobkaehenry.github.io/what-am-i-toy-project-/',
      },
    })
  }
  function shareStoryWeb() { // 카카오 스토리 공유하기
    Kakao.Story.share({
      url: 'https://jobkaehenry.github.io/what-am-i-toy-project-/',
      text: '[나만의 보석테스트] 인싸들의 필수코스! 나와 꼭 맞는 아름다운 보석을 간단한 심리테스트로 찾아보아요',
    })
  }

  function copyUrl (){
    navigator.clipboard.writeText(location.href).then(() => {
      console.log('success');
  });

    alert("링크가 복사되었습니다 붙혀넣기를 통해 공유해보세요")
}