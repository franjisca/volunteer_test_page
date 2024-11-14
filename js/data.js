const volunteerTest = {
  questions: [
    "낯선 사람에게도 길을 편하게 잘 물어보는 편인가요?",
    "즉흥적으로 발을 움직이는 것보단 밤새워 계획을 짜는 걸 좋아하나요?",
    "마치 닌자처럼 위기 상황에선 조용히 해결하고 도망치듯 떠나나요?",
    "팀 회의에서 항상 당신의 의견을 한 방에 결정하게 만드는 숨겨진 카리스마가 있나요?",
    "여행 중에 메뉴판이 없으면, 아무 음식이나 시키는 편인가요?",
    "10분만 앉아 있어도 다리가 근질근질하나요?",
    "다른 사람들에게 문제를 맡기는 대신 자꾸 손이 먼저 나가서 내가 해결하고 싶나요?",
    "가끔 ‘어쩌면 내 두 번째 직업은 요리사일지도?’라는 생각을 하나요?",
    "갑자기 물에 빠진 사람이 있다면 물에 뛰어들 수 있나요?",
    "체력왕! 하루 종일 달리기 가능! 이게 당신인가요?"
  ],
  results: {
    ScheduleMaster: {
      name: "든든한 리더 수향 타입",
      description: "당신은 철저한 계획과 치밀한 준비로 어떤 상황에서도 팀을 이끌어 가는 든든한 리더입니다. 문제를 미리 예측하고 대비하는 능력 덕분에, 당신이 있으면 팀원들은 언제나 안정감을 느낍니다. 당신의 뛰어난 일정 관리와 조직력 덕분에 봉사 프로젝트는 항상 순조롭게 진행됩니다. 마치 퍼즐 조각을 맞추듯 작은 일도 놓치지 않고 세심하게 챙기는 당신의 리더십은 봉사 현장에서 없어선 안 될 존재입니다. 어려운 상황 속에서도 침착함을 유지하며, 팀원들이 지치지 않도록 방향을 제시하는 멋진 리더로, 모두가 의지하는 팀의 중심이 되어줍니다.",
      matchingAnswers: [2, 3, 4, 7],
      image: "suhyang.PNG",
    },
    ActionHero: {
      name: "액션 히어로 민주 타입",
      description: "문제가 생기면 가장 먼저 움직이는 사람이 바로 당신! 현장에선 누구보다 빠르게 상황을 파악하고 즉각적인 행동으로 문제를 해결합니다. 당신의 빠르고 결정적인 행동력은 봉사 현장에서 큰 차이를 만들어냅니다. 몸을 아끼지 않고 어려운 작업도 마다하지 않으며, 적극적으로 문제를 해결하는 당신은 마치 영화 속의 영웅 같습니다. 어려움이 닥쳐도 두려움 없이 돌진하는 당신 덕분에 팀원들은 언제나 큰 힘을 얻습니다. 봉사 활동 중 발생하는 돌발 상황에서도 침착하게 대응하며, 누구보다도 손발이 빠르고 실행력이 뛰어난 사람, 바로 당신입니다.",
      matchingAnswers: [1, 6, 9, 10],
      image: "minju.png",
    },
    EducationWizard: {
      name: "배움의 마법사 기은 타입",
      description: "배움에 대한 열정이 가득한 당신은 봉사 현장에서 교육을 통해 변화를 만들어내는 진정한 스승입니다. 현지 주민들에게 필요한 지식을 전수하고, 그들이 자립할 수 있도록 돕는 능력이 뛰어납니다. 사람들의 눈높이에 맞춘 교육 방식을 통해 복잡한 문제도 쉽게 풀어가며, 당신의 지혜와 경험은 현장 사람들에게 깊은 감명을 줍니다. 단순한 지식 전달을 넘어 그들의 삶을 변화시키고 지속 가능한 발전을 도모하는 데 큰 기여를 합니다. 언제나 준비된 자세로, 가르침을 통해 세상을 더 나은 곳으로 만드는 당신의 모습은 마치 마법사처럼 신비롭고 놀랍습니다.",
      matchingAnswers: [5, 8, 4, 1],
      image: "kieun.PNG",
    },
    ProblemSolver: {
      name: "솔로몬 주연 타입",
      description: "당신은 문제 해결에 있어서 창의적이고 논리적인 접근을 하는 천재적인 해결사입니다. 마치 셜록 홈즈처럼 복잡한 문제도 침착하게 분석하고, 누구도 생각지 못한 방법으로 해결해냅니다. 봉사 현장에서 위기가 닥치면, 당신의 침착함과 창의력 덕분에 상황은 금세 나아집니다. 당신은 문제를 멀리서 바라보며 종합적으로 해결하는 능력이 뛰어나, 주변 사람들은 항상 당신에게 기대고 의지합니다. 복잡한 상황에서도 빠르게 핵심을 파악하고, 누구보다도 효율적으로 문제를 해결하는 능력을 가진 당신은 팀에게 없어서는 안 될 존재입니다. 언제나 해결책을 제시하는 명석한 두뇌와 냉철한 판단력으로 현장의 어려움을 극복합니다.",
      matchingAnswers: [2, 3, 7, 9],
      image: "juyeon.JPG"
    },
    // '아니오'만 선택한 경우 기본 결과 유형 추가
    NoAnswerType: {
      name: "돌다리도 두드려보는 타입",
      description: "매사에 신중한 당신은 무슨 일이든 확실하게 준비하고, 사전에 철저하게 점검하는 타입입니다. 돌다리도 두드려보는 당신의 신중함 덕분에, 봉사 현장에서는 실수나 실패가 적습니다. 모든 상황에서 안정적이고 차분하게 대처하며, 주어진 업무를 무리 없이 수행해냅니다. 감정적인 결정보다는 이성적인 판단을 우선시하며, 팀원들에게는 든든한 후방 지원자 역할을 합니다. 당신의 신중한 태도는 상황이 복잡할수록 더욱 빛을 발하며, 봉사 활동에서 중요한 결정을 내릴 때 큰 도움이 됩니다. 조용하지만 결정적일 때 나서는 당신의 모습은 현장에서 꼭 필요한 유형입니다.",
      matchingAnswers: [], // 이 결과는 답변에 의존하지 않음
      image: "stone.png",
    }
  },
  calculateResult: function (answers) {
    const resultScores = {
      ScheduleMaster: 0,
      ActionHero: 0,
      EducationWizard: 0,
      ProblemSolver: 0
    };

    // 'true'만 점수 계산
    answers.forEach((answer, index) => {
      if (answer === true) {
        if (this.results.ScheduleMaster.matchingAnswers.includes(index + 1)) {
          resultScores.ScheduleMaster++;
        }
        if (this.results.ActionHero.matchingAnswers.includes(index + 1)) {
          resultScores.ActionHero++;
        }
        if (this.results.EducationWizard.matchingAnswers.includes(index + 1)) {
          resultScores.EducationWizard++;
        }
        if (this.results.ProblemSolver.matchingAnswers.includes(index + 1)) {
          resultScores.ProblemSolver++;
        }
      }
    });
    // 최대 점수를 가진 결과 찾기
    let highestScore = 0;
    let bestFit = "";

    for (const type in resultScores) {
      if (resultScores[type] > highestScore) {
        highestScore = resultScores[type];
        bestFit = type;
      }
    }

    // 모든 답변이 '아니오'일 경우 기본 결과 반환
    if (highestScore === 0) {
      return {
        name: "돌다리도 두드려보는 타입",
        description: "매사에 신중한 당신은 무슨 일이든 확실하게 준비하고, 사전에 철저하게 점검하는 타입입니다. 돌다리도 두드려보는 당신의 신중함 덕분에, 봉사 현장에서는 실수나 실패가 적습니다. 모든 상황에서 안정적이고 차분하게 대처하며, 주어진 업무를 무리 없이 수행해냅니다. 감정적인 결정보다는 이성적인 판단을 우선시하며, 팀원들에게는 든든한 후방 지원자 역할을 합니다. 당신의 신중한 태도는 상황이 복잡할수록 더욱 빛을 발하며, 봉사 활동에서 중요한 결정을 내릴 때 큰 도움이 됩니다. 조용하지만 결정적일 때 나서는 당신의 모습은 현장에서 꼭 필요한 유형입니다.",
        image: "stone.png",
      };
    }

    return this.results[bestFit];
  }
};