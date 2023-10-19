'use-strict';
// Task-1
const resultElement1 = document.getElementById('result1');
const generateBtn1 = document.getElementById('generateBtn1');

generateBtn1.onclick = function () {
    resultElement1.textContent = Math.floor(Math.random() * 10);
};

// Task-2
const resultElement2 = document.getElementById('result2');
const generateBtn2 = document.getElementById('generateBtn2');

generateBtn2.onclick = function () {
    const min = 89;
    const max = 799;
    resultElement2.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
};

// Task-3
const inputElement3 = document.getElementById('input3');
const submitBtn3 = document.getElementById('submitBtn3');
const resultElement3 = document.getElementById('result3');

const defineQuarter = (minute) => {
    return Math.floor(minute / 15) + 1;
};

submitBtn3.onclick = function () {
    const quarter = defineQuarter(Number(inputElement3.value));

    if (quarter <= 4) {
        resultElement3.textContent = quarter;
    } else {
        alert('Please input number between 0 and 59');
    }
};

// Task-4
const inputElement4 = document.getElementById('input4');
const submitBtn4 = document.getElementById('submitBtn4');
const resultElement4 = document.getElementById('result4'); 

submitBtn4.onclick = function() {
    resultElement4.textContent = Number(inputElement4.value) === 0 ? 'True' : 'False';
}

// Task-5
const inputElement5 = document.getElementById('input5');
const submitBtn5 = document.getElementById('submitBtn5');
const resultElement5 = document.getElementById('result5'); 

submitBtn5.onclick = function() {
    resultElement5.textContent = Number(inputElement5.value) <= 0 ? 'True' : 'False';
}

// Task-6
const inputElement6 = document.getElementById('input6');
const submitBtn6 = document.getElementById('submitBtn6');
const resultElement6 = document.getElementById('result6'); 

submitBtn6.onclick = function() {
    resultElement6.textContent = inputElement6.value === 'test' ? 'True' : 'False';
}
// Task-7
const inputElement7 = document.getElementById('input7');
const submitBtn7 = document.getElementById('submitBtn7');
const resultElement7 = document.getElementById('result7'); 

submitBtn7.onclick = function() {
    const number = Number(inputElement7.value);

    resultElement7.textContent = number > 0 && number < 5 ? 'True' : 'False';
}

// Task-8
const inputElement1 = document.getElementById('input81');
const inputElement2 = document.getElementById('input82');
const submitBtn8 = document.getElementById('submitBtn8');
const resultElement8 = document.getElementById('result8'); 

submitBtn8.onclick = function () {
    const inp1 = Number(inputElement1.value);
    const inp2 = Number(inputElement2.value);
    
    if (inp1 <= 1 && inp2 >= 3) {
        resultElement8.textContent = inp1 + inp2;
    } else {
        resultElement8.textContent = inp1 - inp2;
    }
}
// Task-9
const startGameBtn = document.getElementById('startGame');

startGameBtn.onclick = function () {
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 3;
    
    while (attempts > 0) {
        const guess = parseInt(prompt(`Enter a number between 1 and 10 (Attempts left: ${attempts})`));
        
        if (guess === targetNumber) {
            document.getElementById('gameResult').textContent = `Congratulations! You guessed the number (${targetNumber}) correctly.`;
            break;
        } else {
            attempts--;
            if (attempts === 0) {
                document.getElementById('gameResult').textContent = `You've run out of attempts. The correct number was ${targetNumber}.`;
            }
        }
    }
}