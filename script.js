// 영어 단어와 한국어 뜻 데이터
const wordPairs = [
    { english: 'Apple', korean: '사과' },
    { english: 'Book', korean: '책' },
    { english: 'Cat', korean: '고양이' },
    { english: 'Dog', korean: '개' },
    { english: 'House', korean: '집' },
    { english: 'Car', korean: '자동차' },
    { english: 'Tree', korean: '나무' },
    { english: 'Water', korean: '물' },
    { english: 'Sun', korean: '태양' },
    { english: 'Moon', korean: '달' },
    { english: 'School', korean: '학교' },
    { english: 'Friend', korean: '친구' },
    { english: 'Family', korean: '가족' },
    { english: 'Food', korean: '음식' },
    { english: 'Music', korean: '음악' },
    { english: 'Love', korean: '사랑' },
    { english: 'Happy', korean: '행복한' },
    { english: 'Beautiful', korean: '아름다운' },
    { english: 'Strong', korean: '강한' },
    { english: 'Smart', korean: '똑똑한' }
];

class CardGame {
    constructor() {
        this.gameBoard = document.getElementById('gameBoard');
        this.scoreElement = document.getElementById('score');
        this.triesElement = document.getElementById('tries');
        this.gameStatus = document.getElementById('gameStatus');
        this.startBtn = document.getElementById('startBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.difficultySelect = document.getElementById('difficulty');
        
        this.score = 0;
        this.tries = 0;
        this.matchedPairs = 0;
        this.flippedCards = [];
        this.gameCards = [];
        this.canFlip = true;
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.resetBtn.addEventListener('click', () => this.resetGame());
    }
    
    startGame() {
        this.resetGameState();
        this.createGameCards();
        this.renderCards();
        this.gameStatus.textContent = '카드를 클릭하여 영어 단어와 한국어 뜻을 맞춰보세요!';
        this.startBtn.textContent = '게임 진행중...';
        this.startBtn.disabled = true;
    }
    
    resetGame() {
        this.resetGameState();
        this.gameBoard.innerHTML = '';
        this.gameStatus.textContent = '게임을 시작하려면 \'게임 시작\' 버튼을 클릭하세요!';
        this.startBtn.textContent = '게임 시작';
        this.startBtn.disabled = false;
    }
    
    resetGameState() {
        this.score = 0;
        this.tries = 0;
        this.matchedPairs = 0;
        this.flippedCards = [];
        this.gameCards = [];
        this.canFlip = true;
        this.updateUI();
    }
    
    createGameCards() {
        const difficulty = this.difficultySelect.value;
        let numPairs;
        
        switch(difficulty) {
            case 'easy': numPairs = 3; break;
            case 'medium': numPairs = 6; break;
            case 'hard': numPairs = 10; break;
            default: numPairs = 3;
        }
        
        // 선택된 수만큼 단어 쌍을 랜덤하게 선택
        const selectedPairs = this.shuffleArray([...wordPairs]).slice(0, numPairs);
        
        // 각 쌍에서 영어와 한국어 카드를 생성
        this.gameCards = [];
        selectedPairs.forEach((pair, index) => {
            this.gameCards.push({
                id: index * 2,
                pairId: index,
                content: pair.english,
                type: 'english',
                isFlipped: false,
                isMatched: false
            });
            this.gameCards.push({
                id: index * 2 + 1,
                pairId: index,
                content: pair.korean,
                type: 'korean',
                isFlipped: false,
                isMatched: false
            });
        });
        
        // 카드들을 섞기
        this.gameCards = this.shuffleArray(this.gameCards);
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    renderCards() {
        const difficulty = this.difficultySelect.value;
        this.gameBoard.className = `game-board ${difficulty}`;
        this.gameBoard.innerHTML = '';
        
        this.gameCards.forEach(card => {
            const cardElement = this.createCardElement(card);
            this.gameBoard.appendChild(cardElement);
        });
    }
    
    createCardElement(card) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.cardId = card.id;
        
        cardElement.innerHTML = `
            <div class="card-content">${card.content}</div>
            <div class="card-back">?</div>
        `;
        
        cardElement.addEventListener('click', () => this.flipCard(card.id));
        
        return cardElement;
    }
    
    flipCard(cardId) {
        if (!this.canFlip) return;
        
        const card = this.gameCards.find(c => c.id === cardId);
        const cardElement = document.querySelector(`[data-card-id="${cardId}"]`);
        
        if (card.isFlipped || card.isMatched) return;
        
        // 카드 뒤집기
        card.isFlipped = true;
        cardElement.classList.add('flipped');
        this.flippedCards.push(card);
        
        if (this.flippedCards.length === 2) {
            this.canFlip = false;
            this.tries++;
            this.updateUI();
            
            setTimeout(() => {
                this.checkMatch();
            }, 800);
        }
    }
    
    checkMatch() {
        const [card1, card2] = this.flippedCards;
        const card1Element = document.querySelector(`[data-card-id="${card1.id}"]`);
        const card2Element = document.querySelector(`[data-card-id="${card2.id}"]`);
        
        if (card1.pairId === card2.pairId) {
            // 매치 성공
            card1.isMatched = true;
            card2.isMatched = true;
            card1Element.classList.add('matched');
            card2Element.classList.add('matched');
            
            this.score += 10;
            this.matchedPairs++;
            
            this.gameStatus.textContent = '정답입니다! 🎉';
            
            if (this.matchedPairs === this.gameCards.length / 2) {
                this.gameComplete();
            }
        } else {
            // 매치 실패
            card1Element.classList.add('wrong');
            card2Element.classList.add('wrong');
            
            setTimeout(() => {
                card1.isFlipped = false;
                card2.isFlipped = false;
                card1Element.classList.remove('flipped', 'wrong');
                card2Element.classList.remove('flipped', 'wrong');
            }, 1000);
            
            this.gameStatus.textContent = '틀렸습니다. 다시 시도해보세요!';
        }
        
        this.flippedCards = [];
        this.canFlip = true;
        this.updateUI();
    }
    
    gameComplete() {
        const accuracy = Math.round((this.matchedPairs / this.tries) * 100);
        this.gameStatus.innerHTML = `
            🎊 축하합니다! 게임 완료! 🎊<br>
            정확도: ${accuracy}%<br>
            총 점수: ${this.score}점
        `;
        this.gameStatus.classList.add('game-complete');
        this.startBtn.textContent = '게임 시작';
        this.startBtn.disabled = false;
        
        // 모든 카드에 완료 애니메이션 추가
        document.querySelectorAll('.card').forEach(card => {
            card.style.animation = 'celebration 0.6s ease infinite alternate';
        });
    }
    
    updateUI() {
        this.scoreElement.textContent = this.score;
        this.triesElement.textContent = this.tries;
    }
}

// 게임 초기화
document.addEventListener('DOMContentLoaded', () => {
    new CardGame();
});