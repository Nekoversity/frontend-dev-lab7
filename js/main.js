// Creating and appending html elements //

const body = document.getElementsByTagName('body')[0];

const content = document.createElement('div');
content.setAttribute('id', 'content');
body.appendChild(content);

const questionParagraph = document.createElement('p');
const questionParagraphContent = document.createTextNode('Запитайте у магічної кулі будь-що, вона відповість. ' +
    'Натисніть на кулю, щоб отримати результат.');
questionParagraph.appendChild(questionParagraphContent);
content.appendChild(questionParagraph);

const input = document.createElement('input');
input.type = 'text';
input.setAttribute('id', 'question');
input.setAttribute('name', 'question');
content.appendChild(input);

const magicBall = document.createElement('div');
magicBall.setAttribute('id', 'magic-ball');
const answerArea = document.createElement('div');
answerArea.className = 'answer-area';
const answerParagraph = document.createElement('p');
answerParagraph.setAttribute('id', 'answer');
const answerParagraphContent = document.createTextNode('?');

answerParagraph.appendChild(answerParagraphContent);
answerArea.appendChild(answerParagraph);
magicBall.appendChild(answerArea);
content.appendChild(magicBall);


// Binding listener
magicBall.addEventListener('click', doMagic);


// Support functions
function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


// Data objects
const memory = {
    "": "?"
};
const availableAnswers = [
    'Не вневнений',
    'Скоріше так, чим ні',
    'Скоріше ні, чим так',
    'Так',
    'Ні',
    'Не знаю',
    'Спитай щось інше',
    'Точно так',
    'Стовідсоткове ні',
    'Спитай у більш досвідченої кулі',
    'Краще не говорити',
    'Спитай іншим разом'
];


// Guess function
function doMagic() {
    let ans = getRandomArrayElement(availableAnswers);
    if (!memory.hasOwnProperty(input.value))
        memory[input.value] = ans;
    answerParagraph.innerText = memory[input.value];
}