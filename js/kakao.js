

  function sendLink() { // 카카오톡 공유하기
      Kakao.init('d63a2454b6b5f2aa928a43fdee5ff8e0');
      
      Kakao.Link.createDefaultButton({
        container: '#create-kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '[나만의 보석테스트]',
          description: '[나만의 보석테스트] 인싸들의 필수코스! 나와 꼭 맞는 아름다운 보석을 간단한 심리테스트로 찾아보아요',
          imageUrl:
            'https://ifh.cc/g/GB2Q55.jpg',
          link: {
            mobileWebUrl: 'https://jobkaehenry.github.io/what-am-i-toy-project-/',
            webUrl: 'https://jobkaehenry.github.io/what-am-i-toy-project-/',
          },
        }
      })
  }