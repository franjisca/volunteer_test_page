
function kakaoshare() {
    const resultName = document.querySelector('.resultName h3').innerText;
    const resultDescription = document.querySelector('.resultDsr').innerText;
    const resultImageSrc = document.querySelector('#resultImage img').src;

    let resultPage;

    // Set the result page based on the user's result
    if (resultName === "당신은 든든한 리더 수향 타입") {
        resultPage = "result-suhyang.html";
    } else if (resultName === "당신은 액션 히어로 민주 타입") {
        resultPage = "result-minju.html";
    } else if (resultName === "당신은 배움의 마법사 기은 타입") {
        resultPage = "result-kieun.html";
    } else if (resultName === "당신은 솔로몬 주연 타입") {
        resultPage = "result-juyeon.html";
    } else {
        resultPage = "result-stone.html"; // Default page if no result matches
    }

    const shareUrl = `https://volurnteer-test-page.netlify.app/page/${resultPage}`;

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: resultName,  // Title of the result
            description: resultDescription,  // Description of the result
            imageUrl: resultImageSrc,  // Image URL for the result
            link: {
                mobileWebUrl: shareUrl,
                webUrl: shareUrl,
            }
        },
        buttons: [
            {
                title: '결과 확인하러 가기',
                link: {
                    mobileWebUrl: shareUrl,  // Link to take the test again
                    webUrl: shareUrl,  // Link to take the test again (desktop version)
                }
            }
        ]
    });
}
