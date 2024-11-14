const main = document.querySelector("#main"); // 시작 화면
const qna = document.querySelector("#qna");  // QnA 화면
const resultBox = document.querySelector("#result");// 결과화면
const yesBtn = document.querySelector('.yesBtn');  // "예" 버튼
const noBtn = document.querySelector('.noBtn');    // "아니오" 버튼
const endPoint = 10;

// 사용자 응답을 저장할 배열
let currentQuestionIndex = 0;
const userAnswers = [];

// 질문을 표시하는 함수
function goNext(qIdx) {
    const q = document.querySelector(".qBox");  // 질문을 표시할 영역

    // 이전 질문에 페이드아웃 애니메이션 적용
    q.classList.remove('fadeIn');  // 기존 fadeIn 제거
    q.classList.add('fadeOut');     // fadeOut 적용


    // 애니메이션이 끝난 후 질문을 바꾸고 페이드인
    setTimeout(() => {
        q.innerHTML = `${volunteerTest.questions[qIdx]}`;  // 새 질문 표시
        q.classList.remove('fadeOut');  // fadeOut 제거
        q.classList.add('fadeIn');  // fadeIn 적용


        const status = document.querySelector('.statusBar'); // statusBar 채우기
        status.style.width = ((qIdx + 1) / endPoint) * 100 + '%';

        setTimeout(() => {
            yesBtn.style.display = "block";
            noBtn.style.display = "block";

            yesBtn.disabled = false;
            noBtn.disabled = false;
        }, 300);

    }, 1000);  // fadeOut 애니메이션 시간에 맞춰 대기

}

// 다음 질문으로 이동하는 함수
function nextQuestion(answer) {
    // 버튼 비활성화
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    document.activeElement.blur();


    userAnswers.push(answer);  // 답변 저장

    // 마지막 질문인지 확인
    if (currentQuestionIndex < volunteerTest.questions.length - 1) {
        currentQuestionIndex++;  // 다음 질문으로 이동
        goNext(currentQuestionIndex);  // 다음 질문 표시
    } else {

        const status = document.querySelector(".status");
        status.style.display = "none";
        // 모든 질문이 끝나면 결과 계산
        const result = volunteerTest.calculateResult(userAnswers);

        // 버튼 숨기기
        yesBtn.style.display = "none";
        noBtn.style.display = "none";

        showResult(result);  // 결과를 표시
    }
}

// 결과를 표시하는 함수
function showResult(result) {
    qna.style.animation = "fadeOut 1s ease forwards";

    // 애니메이션이 끝난 후 결과 표시
    setTimeout(() => {

        resultBox.style.animation = "fadeIn 1s ease forwards";

        setTimeout(() => {
            qna.style.display = "none";
            resultBox.style.display = "block";

            const resultText = document.querySelector(".resultDsr");
            const resultName = document.querySelector(".resultName");
            const resultImg = document.querySelector("#resultImage");
            var img = document.createElement('img');

            img.src = `image/${result.image}`;
            img.alt = "typeImage";
            img.classList.add('img-fluid');


            resultName.innerHTML = `<h3>${result.name}</h3>`;
            resultImg.appendChild(img);
            resultText.innerHTML = `${result.description}</h2 > `;  // 결과 표시
            resultText.classList.remove('fadeOut');
            resultText.classList.add('fadeIn');

        }, 300);
    }, 1000);  // fadeOut 시간 맞춰 대기
}

// 시작 화면에서 질문 화면으로 전환하는 함수
function begin() {
    main.style.animation = "fadeOut 1s ease forwards";  // 시작 화면 페이드아웃

    setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block";  // QnA 화면을 보이게 함
        qna.style.animation = "fadeIn 1s ease forwards";  // QnA 화면 페이드인
    }, 1000);

    let qIdx = 0;
    goNext(qIdx);  // 첫 번째 질문 표시
}

// "예" 또는 "아니오" 버튼 클릭 이벤트 처리
yesBtn.addEventListener('click', () => {
    nextQuestion(true);  // "예"를 선택하면 true 전달
});

noBtn.addEventListener('click', () => {
    nextQuestion(false);  // "아니오"를 선택하면 false 전달
});