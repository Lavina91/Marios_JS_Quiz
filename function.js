// VARIABLE DECLARATIONS 
var quizQuestion = [
    {
        question: 'What are functions inside of an object called?',
        choices: ['Inner Function', 'Fuction[2]', 'Method', 'none of the above'],

        answer: ' Method'
    },
    {
        question: 'What are the values passed through a function called?',
        choices: ['Params', 'Arguments', 'Variables', 'None of the above'],
        answer: ' Arguments'
    },

    {
        question: 'What are the names of 2 different scope types?',
        choices: ['Inner & Outer', 'First & Last', 'Local & Global', 'None of the above'],
        answer: ' Local & Global'
    },
    {
        question: 'What are the 2 ways to create a function?',
        choices: ['Expression & Declaration', 'Annocement & Statement', 'Truthy & Falsy', 'None of the above'],
        answer: ' Expression & Declaration'
    },

]

// console.log(quizQuestion[0].choices[0])

// variable to store quiz timer
var quizTime = 60;

// setting user score to 0
var userScore = '';

var questionIndex = 0;
var answerIndex = 0;


var userName = ''


// connects to my start button 
var startBtn = document.querySelector('#startBtn'); // works 

// connects to my timer 
var timer = document.querySelector('#timer'); // works 

// connects to title section of quiz
var quizTitle = document.querySelector('#title'); //works 

// connects to the body og the quiz
var quizBody = document.querySelector('#body'); // works

// connect to all quiz button choices 
var allButtons = document.querySelectorAll('.choice-btn');

// connecting to the div that will contain the results of the quiz
var finalResults = document.querySelector('#final-results')

var finalScore = document.querySelector('#final-score')



// button A
var btnA = document.querySelector('#btna')
// button B
var btnB = document.querySelector('#btnb')
// button C
var btnC = document.querySelector('#btnc')
// button D
var btnD = document.querySelector('#btnd')


// div created to hold quiz answer choices 
var choiceSection = document.querySelector('.answerDiv');

// connects to the high score section of the header 
var viewHighScore = document.querySelector('#high-score'); // work






// FUNCTIONS

// function works 
function startTime() {
    // once start button is clicked 
    // Timer goes down from 120 

    // and then I call on the function generate Question
    var quizInterval = setInterval(function () {
        // counts time down 
        quizTime--;

        // create visible timer so user can see time left
        timer.textContent = 'Time: ' + quizTime;


        // if the timer in the quiz reaches 0 OR runs out of questions 
        if (quizTime <= 0 || questionIndex >= quizQuestion.length) {
            clearInterval(quizInterval)

            // hide the quiz body 
            quizBody.setAttribute('style', 'display:none')
            choiceSection.setAttribute('style', 'display:none')

            finalResults.setAttribute('style', 'display:block')


            finalScore.setAttribute('style', 'font-weight:bolder')
            finalScore.textContent = 'Your final Score is ' + quizTime










        }
    }, 1000)

    generateQuestions();

};


function generateQuestions() {

    // hide intro page 

    // hides intro header 
    quizTitle.setAttribute('style', 'display:none');

    // hides the start button 
    startBtn.setAttribute('style', 'display:none')

    // hides the intro p element 
    var hidden = document.querySelector('#hide');
    hidden.setAttribute('style', 'display:none');




    quizBody.textContent = quizQuestion[questionIndex].question;


    choiceSection.setAttribute('style', 'display:block')

    btnA.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
    btnA.textContent = quizQuestion[questionIndex].choices[answerIndex]
    answerIndex++;

    btnB.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
    btnB.textContent = quizQuestion[questionIndex].choices[answerIndex]
    answerIndex++;

    btnC.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
    btnC.textContent = quizQuestion[questionIndex].choices[answerIndex]
    answerIndex++;

    btnD.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
    btnD.textContent = quizQuestion[questionIndex].choices[answerIndex];




    btnA.addEventListener('click', function () {

        let answerIndex = 0

        if (btnA.name === quizQuestion[questionIndex].answer) {
            alert('Your right')
            quizQuestion[questionIndex].choices
            questionIndex++;
            quizBody.textContent = quizQuestion[questionIndex].question

            console.log(questionIndex)

            btnA.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnA.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnB.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnB.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnC.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnC.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnD.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnD.textContent = quizQuestion[questionIndex].choices[answerIndex];





        }
        else {

            alert('Try again')
            quizTime = quizTime - 10


        }
    })



    btnB.addEventListener('click', function () {

        let answerIndex = 0

        if (btnB.name === quizQuestion[questionIndex].answer) {
            alert('Your right')
            quizQuestion[questionIndex].choices
            questionIndex++;
            quizBody.textContent = quizQuestion[questionIndex].question

            console.log(questionIndex)


            btnA.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnA.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnB.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnB.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnC.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnC.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnD.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnD.textContent = quizQuestion[questionIndex].choices[answerIndex];

        }
        else {

            alert('Try Again')
            quizTime = quizTime - 10


        }
    })






    btnC.addEventListener('click', function () {

        let answerIndex = 0

        if (btnC.name === quizQuestion[questionIndex].answer) {
            alert('Your right')

            quizQuestion[questionIndex].choices
            questionIndex++;
            quizBody.textContent = quizQuestion[questionIndex].question


            console.log(quizQuestion.length)
            console.log(questionIndex)


            btnA.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnA.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnB.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnB.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnC.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnC.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnD.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnD.textContent = quizQuestion[questionIndex].choices[answerIndex];


        }
        else {

            alert('Try Again')
            quizTime = quizTime - 10


        }
    })




    btnD.addEventListener('click', function () {

        let answerIndex = 0

        if (btnD.name === quizQuestion[questionIndex].answer) {
            alert('Your right')
            quizQuestion[questionIndex].choices
            questionIndex++;
            quizBody.textContent = quizQuestion[questionIndex].question

            console.log(questionIndex)


            btnA.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnA.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnB.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnB.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnC.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnC.textContent = quizQuestion[questionIndex].choices[answerIndex]
            answerIndex++;

            btnD.setAttribute('name', ' ' + quizQuestion[questionIndex].choices[answerIndex])
            btnD.textContent = quizQuestion[questionIndex].choices[answerIndex];


        }
        else {

            alert('Try Again')
            quizTime = quizTime - 10


        }
    })












}























startBtn.addEventListener('click', startTime);