// VARIABLE DECLARATIONS 

// connects to my start button 
var startBtn = document.querySelector('#startBtn'); // works 

// connects to my timer 
var timer = document.querySelector('#timer'); // works 

var answerDiv = document.querySelector('.answerDiv');


// connects to title section of quiz
var quizTitle = document.querySelector('#title'); //works 

// connects to the body og the quiz
var quizBody = document.querySelector('#body'); // works

// connects to the high score section of the header 
var viewHighScore = document.querySelector('#high-score'); // work


// Quiz questions
var quizQuestion = [
    {
        question: 'What are functions inside of an object called?',
        choices: ['Inner Function', 'Function[2]', 'Method', 'None of the above'],
        answer: 'Method'
    },

    {
        question: 'What are the values passed through a function called?',
        choices: ['Params', 'Arguments', 'Variables', 'None of the above'],
        answer: 'Arguments'
    },

    {
        question: 'What are the names of 2 different scope types?',
        choices: ['Inner & Outer', 'First & Last', 'Local & Global', 'None of the above'],
        answer: 'Local & Global'
    },

    {
        question: 'What are the 2 ways to create a function?',
        choices: ['Expression & Declaration', 'Announcement & Statement', 'Truthy & Falsy', 'None of the above'],
        answer: 'Expression & Declaration'
    },

]

console.log(quizQuestion[0].choices[0])

// variable to store quiz timer
var quizTime = 120;

// setting user score to 0
var userScore = 0;

var questionIndex = 0;

var userName = ''


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
        if (quizTime <= 0 || questionIndex === quizQuestion.length) {
            clearInterval(quizInterval)
        }
    }, 1000)

    generateQuestions();

};


function generateQuestions() {

    // hide initial info that is on intro page 
    quizTitle.textContent = '';

    // hides the paragraph element of intro page 
    var hidden = document.querySelector('#hide')
    hidden.setAttribute('style', 'display:none')

    startBtn.setAttribute('style', 'display:none')



    //create a new ol element and append to bodyEl
    var divEl = document.createElement('h1')

    quizBody.appendChild(divEl);



    var olEl = document.createElement('ol')

    divEl.appendChild(olEl);
    console.log(olEl)
    // document.querySelector(".answerBtn").innerText = quizQuestion[0].choices[0]

    var i = 0

    quizQuestion.forEach(data => {
        console.log(JSON.stringify(data))
    })

    // quizBody.textContent = quizQuestion[questionIndex].question;

    // loop thru variable quizQuestions.question[i].length
    for (i = 0; i < quizQuestion.length; i++) {

        // and display question to user
        answerDiv.textContent = quizQuestion[questionIndex].question
        console.log(answerDiv.textContent = quizQuestion[questionIndex].question)




        // create a new li element to attach choices on 
        var liEl = document.createElement('li');
        olEl.appendChild(liEl)


        // assign it a class of button 
        var btnEl = document.createElement('button');
    

        // CHANGE THE SIZE OF THE BUTTONS USING SETATTRIBUTE


        liEl.append(btnEl);



        btnEl.textContent = quizQuestion[questionIndex].choices[i]
        console.log(quizQuestion[questionIndex].choices[i])

 }

    function checkAnswer() {

        // create if statements to check if the button clicked is === to quizQuestions.answer



        // attach event listener to that button 
        btnEl.addEventListener('click', function () {



            if ( btnEl=== quizQuestion[questionIndex].answer) {
                alert('correct')
            }
            else {
                alert('incorrect')
                console.log(quizQuestion[questionIndex].answer)

            }


        })



        // if right move to next question 


        // else wrong stay at question
        // and take off 15 secs 

    };

            checkAnswer();
};




function endQuiz() {

    // display score
    // and prompt user for their initials  

    var userInput = window.prompt('Your score was ' + userScore + '\nPlease enter your initials');


    // store score and initials in local storage 

    localStorage.setItem('Participant: ', userInput)
    localStorage.setItem('Score : ', userScore)

}























// EVENT LISTENERS

startBtn.addEventListener('click', startTime);

viewHighScore.addEventListener('click', function () {

    localStorage.getItem(userinput);
    localStorage.getItem(userScore)
})



