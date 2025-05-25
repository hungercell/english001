// DEUX 관련 퀴즈 문제들
const quizQuestions = [
    // 쉬운 난이도 문제들
    {
        difficulty: 'easy',
        question: 'DEUX는 몇 명으로 구성된 그룹인가요?',
        options: ['2명', '3명', '4명', '5명'],
        correct: 0
    },
    {
        difficulty: 'easy',
        question: 'DEUX의 대표곡 중 하나는?',
        options: ['나를 돌아봐', '헤어진 다음날', '여름 안에서', '마지막 승부'],
        correct: 0
    },
    {
        difficulty: 'easy',
        question: 'DEUX가 활동한 시대는?',
        options: ['1990년대', '1980년대', '2000년대', '2010년대'],
        correct: 0
    },
    {
        difficulty: 'easy',
        question: 'DEUX의 멤버 중 한 명의 이름은?',
        options: ['김성재', '김종민', '이승철', '박진영'],
        correct: 0
    },
    {
        difficulty: 'easy',
        question: 'DEUX의 또 다른 멤버의 이름은?',
        options: ['이현도', '이승환', '이문세', '이상은'],
        correct: 0
    },
    {
        difficulty: 'easy',
        question: 'DEUX는 어떤 장르의 음악을 주로 했나요?',
        options: ['댄스/팝', '락', '트로트', '재즈'],
        correct: 0
    },
    {
        difficulty: 'easy',
        question: 'DEUX가 데뷔한 연도는?',
        options: ['1993년', '1991년', '1995년', '1997년'],
        correct: 0
    },
    {
        difficulty: 'easy',
        question: 'DEUX의 "나를 돌아봐"는 어떤 스타일의 곡인가요?',
        options: ['댄스곡', '발라드', '락', '힙합'],
        correct: 0
    },
    {
        difficulty: 'easy',
        question: 'DEUX는 90년대 어떤 음악 장르를 대표했나요?',
        options: ['신나는 댄스', '서정적 발라드', '헤비메탈', '포크'],
        correct: 0
    },
    {
        difficulty: 'easy',
        question: 'DEUX의 활동 시기에 인기있던 음악 프로그램은?',
        options: ['가요톱10', '쇼! 음악중심', 'M 카운트다운', '인기가요'],
        correct: 0
    },

    // 보통 난이도 문제들
    {
        difficulty: 'medium',
        question: 'DEUX의 데뷔곡은 무엇인가요?',
        options: ['Turn Around and Look at Me', '나를 돌아봐', 'Come Back to Me', '헤어진 다음날'],
        correct: 1
    },
    {
        difficulty: 'medium',
        question: 'DEUX가 소속되었던 기획사는?',
        options: ['대성기획', 'SM엔터테인먼트', 'YG엔터테인먼트', 'JYP엔터테인먼트'],
        correct: 0
    },
    {
        difficulty: 'medium',
        question: 'DEUX의 "헤어진 다음날"이 수록된 앨범은?',
        options: ['2집', '1집', '3집', '리패키지'],
        correct: 0
    },
    {
        difficulty: 'medium',
        question: 'DEUX의 김성재가 솔로로 발표한 대표곡은?',
        options: ['As I Told You', '살아가는 이야기', '안녕', '그녀를 사랑해'],
        correct: 0
    },
    {
        difficulty: 'medium',
        question: 'DEUX가 해체한 연도는?',
        options: ['1995년', '1996년', '1997년', '1998년'],
        correct: 0
    },
    {
        difficulty: 'medium',
        question: 'DEUX의 활동 당시 함께 인기를 끌었던 댄스 그룹은?',
        options: ['서태지와 아이들', '신화', 'H.O.T.', '소방차'],
        correct: 0
    },
    {
        difficulty: 'medium',
        question: 'DEUX의 "여름 안에서"는 몇 집 수록곡인가요?',
        options: ['2집', '1집', '3집', '베스트앨범'],
        correct: 0
    },
    {
        difficulty: 'medium',
        question: 'DEUX의 이현도가 활동한 또 다른 그룹명은?',
        options: ['R.ef', 'Country Kko Kko', '클론', '듀스'],
        correct: 1
    },
    {
        difficulty: 'medium',
        question: 'DEUX가 활동했던 90년대 초반의 대표적인 음악 트렌드는?',
        options: ['신세대 댄스', '포크송', '록발라드', '디스코'],
        correct: 0
    },
    {
        difficulty: 'medium',
        question: 'DEUX의 "마지막 승부"는 어떤 성격의 곡인가요?',
        options: ['이별곡', '사랑고백', '우정', '희망'],
        correct: 0
    },

    // 어려운 난이도 문제들
    {
        difficulty: 'hard',
        question: 'DEUX의 김성재의 본명은?',
        options: ['김성재', '김동원', '김성수', '김영재'],
        correct: 0
    },
    {
        difficulty: 'hard',
        question: 'DEUX가 처음 결성된 계기는?',
        options: ['대학 동기', '음악학원에서 만남', '오디션을 통해', '친구 소개'],
        correct: 1
    },
    {
        difficulty: 'hard',
        question: 'DEUX의 프로듀서로 유명한 인물은?',
        options: ['이수만', '박진영', '양현석', '함춘호'],
        correct: 3
    },
    {
        difficulty: 'hard',
        question: 'DEUX의 마지막 정규앨범은 몇 집인가요?',
        options: ['2집', '3집', '4집', '5집'],
        correct: 1
    },
    {
        difficulty: 'hard',
        question: 'DEUX의 "Coming Back"은 어떤 앨범에 수록되었나요?',
        options: ['1집', '2집', '3집', '싱글앨범'],
        correct: 2
    },
    {
        difficulty: 'hard',
        question: 'DEUX가 해체 후 재결합한 적이 있나요?',
        options: ['있다', '없다', '한 번만', '여러 번'],
        correct: 0
    },
    {
        difficulty: 'hard',
        question: 'DEUX의 이현도가 현재 활동하고 있는 분야는?',
        options: ['프로듀서', '가수', '연기자', '사업가'],
        correct: 0
    },
    {
        difficulty: 'hard',
        question: 'DEUX의 김성재가 작사/작곡에 참여한 곡은?',
        options: ['As I Told You', '나를 돌아봐', '헤어진 다음날', '여름 안에서'],
        correct: 0
    },
    {
        difficulty: 'hard',
        question: 'DEUX가 90년대에 받은 주요 음악상은?',
        options: ['골든디스크상', '서울가요대상', '대한민국 연예예술상', '모두 다'],
        correct: 3
    },
    {
        difficulty: 'hard',
        question: 'DEUX의 해체 사유로 가장 정확한 것은?',
        options: ['군 입대', '음악적 차이', '개인 활동 집중', '소속사 문제'],
        correct: 2
    }
];

class DeuxQuiz {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = [];
        this.userAnswers = [];
        this.difficulty = 'easy';
        this.totalQuestions = 0;
        
        this.initializeElements();
        this.initializeEventListeners();
        this.updateScoreDisplay();
    }
    
    initializeElements() {
        this.startScreen = document.getElementById('startScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.resultScreen = document.getElementById('resultScreen');
        this.startBtn = document.getElementById('startBtn');
        this.questionText = document.getElementById('questionText');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.nextBtn = document.getElementById('nextBtn');
        this.progressBar = document.getElementById('progress');
        this.scoreElement = document.getElementById('score');
        this.currentQuestionElement = document.getElementById('current-question');
        this.totalQuestionsElement = document.getElementById('total-questions');
        this.finalScoreElement = document.getElementById('finalScore');
        this.scoreMessageElement = document.getElementById('scoreMessage');
        this.accuracyElement = document.getElementById('accuracy');
        this.correctAnswersElement = document.getElementById('correctAnswers');
        this.restartBtn = document.getElementById('restartBtn');
        this.shareBtn = document.getElementById('shareBtn');
    }
    
    initializeEventListeners() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.shareBtn.addEventListener('click', () => this.shareResult());
    }
    
    startQuiz() {
        this.difficulty = document.querySelector('input[name="difficulty"]:checked').value;
        this.setupQuestions();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        
        this.startScreen.style.display = 'none';
        this.quizScreen.style.display = 'block';
        
        this.totalQuestionsElement.textContent = this.totalQuestions;
        this.updateScoreDisplay();
        this.displayQuestion();
    }
    
    setupQuestions() {
        let questionCount;
        switch(this.difficulty) {
            case 'easy': questionCount = 5; break;
            case 'medium': questionCount = 8; break;
            case 'hard': questionCount = 10; break;
            default: questionCount = 5;
        }
        
        // 난이도별로 문제 필터링 및 셔플
        let availableQuestions = [];
        
        if (this.difficulty === 'easy') {
            availableQuestions = quizQuestions.filter(q => q.difficulty === 'easy');
        } else if (this.difficulty === 'medium') {
            availableQuestions = [
                ...quizQuestions.filter(q => q.difficulty === 'easy'),
                ...quizQuestions.filter(q => q.difficulty === 'medium')
            ];
        } else {
            availableQuestions = [...quizQuestions];
        }
        
        // 문제 셔플 및 선택
        this.questions = this.shuffleArray(availableQuestions).slice(0, questionCount);
        this.totalQuestions = this.questions.length;
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        this.questionText.textContent = question.question;
        
        // 선택지 생성
        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(index));
            this.optionsContainer.appendChild(optionElement);
        });
        
        this.nextBtn.style.display = 'none';
        this.updateProgress();
        this.updateQuestionCounter();
    }
    
    selectOption(selectedIndex) {
        const question = this.questions[this.currentQuestionIndex];
        const options = document.querySelectorAll('.option');
        
        // 모든 옵션 비활성화
        options.forEach(option => {
            option.classList.add('disabled');
            option.style.pointerEvents = 'none';
        });
        
        // 선택한 옵션 표시
        options[selectedIndex].classList.add('selected');
        
        // 정답 체크
        const isCorrect = selectedIndex === question.correct;
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            selectedIndex: selectedIndex,
            correct: isCorrect
        });
        
        if (isCorrect) {
            this.score += Math.round(100 / this.questions.length);
            options[selectedIndex].classList.add('correct');
        } else {
            options[selectedIndex].classList.add('incorrect');
            options[question.correct].classList.add('correct');
        }
        
        this.updateScoreDisplay();
        
        // 다음 버튼 표시 (마지막 문제가 아닌 경우)
        setTimeout(() => {
            if (this.currentQuestionIndex < this.questions.length - 1) {
                this.nextBtn.style.display = 'block';
            } else {
                this.showResult();
            }
        }, 1500);
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        this.nextBtn.style.display = 'none';
        this.displayQuestion();
    }
    
    showResult() {
        this.quizScreen.style.display = 'none';
        this.resultScreen.style.display = 'block';
        
        const correctAnswers = this.userAnswers.filter(answer => answer.correct).length;
        const accuracy = Math.round((correctAnswers / this.questions.length) * 100);
        
        this.finalScoreElement.textContent = this.score;
        this.accuracyElement.textContent = accuracy + '%';
        this.correctAnswersElement.textContent = correctAnswers;
        
        // 점수에 따른 메시지
        let message;
        if (accuracy >= 90) {
            message = "🎉 DEUX의 진정한 팬이시네요! 완벽합니다!";
        } else if (accuracy >= 80) {
            message = "👍 훌륭해요! DEUX에 대해 잘 알고 계시는군요!";
        } else if (accuracy >= 70) {
            message = "😊 좋아요! DEUX의 기본은 아시는 것 같아요!";
        } else if (accuracy >= 60) {
            message = "🤔 아직 DEUX에 대해 더 알아볼 필요가 있겠어요!";
        } else {
            message = "😅 DEUX의 음악을 더 들어보시는 것을 추천드려요!";
        }
        
        this.scoreMessageElement.textContent = message;
    }
    
    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressBar.style.width = progress + '%';
    }
    
    updateQuestionCounter() {
        this.currentQuestionElement.textContent = this.currentQuestionIndex + 1;
    }
    
    updateScoreDisplay() {
        this.scoreElement.textContent = this.score;
    }
    
    restartQuiz() {
        this.resultScreen.style.display = 'none';
        this.startScreen.style.display = 'block';
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.updateScoreDisplay();
        this.currentQuestionElement.textContent = '0';
    }
    
    shareResult() {
        const correctAnswers = this.userAnswers.filter(answer => answer.correct).length;
        const accuracy = Math.round((correctAnswers / this.questions.length) * 100);
        
        const shareText = `🎤 DEUX 퀴즈 결과 🎵\n점수: ${this.score}점\n정답률: ${accuracy}%\n맞힌 문제: ${correctAnswers}/${this.questions.length}개\n\n90년대 레전드 듀오 DEUX를 기억하며...`;
        
        if (navigator.share) {
            navigator.share({
                title: 'DEUX 퀴즈 결과',
                text: shareText
            });
        } else {
            // 클립보드에 복사
            navigator.clipboard.writeText(shareText).then(() => {
                alert('결과가 클립보드에 복사되었습니다!');
            }).catch(() => {
                alert(shareText);
            });
        }
    }
}

// 게임 초기화
document.addEventListener('DOMContentLoaded', () => {
    new DeuxQuiz();
});