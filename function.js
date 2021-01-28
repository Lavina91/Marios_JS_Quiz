// VARIABLE DECLARATIONS 

// connects to my start button 
var startBtn = document.querySelector('#startBtn'); // works 

// connects to my timer 
var timer = document.querySelector('#timer'); // works 

// connects to title section of quiz
var quizTitle = document.querySelector('#title'); //works 

// connects to the body og the quiz
var quizBody = document.querySelector('#body'); // works

// connects to the high score section of the header 
var viewHighScore = document.querySelector('#high-score'); // work


var quizQuestion = ['What are functions inside of an object called?', 'What are the values passed through a function called?', 'What are the names of 2 different scope types?', 'What are the 2 ways to create a function?', ]

var quizChoices = {

    choice1:  ['Inner Function','Function[2]','Method','None of the above'],

    choice2:  ['Params','Arguments','Variables','None of the above'],

    choice3: ['Inner & Outer','First & Last','Local & Global','None of the above'],
    
    choice4:  ['Expression & Declaration','Announcement & Statement','Truthy & Falsy','None of the above']



}


var quizAnswer = ['Method', 'Arguments', 'Local & Global', 'Expression & Declaration' ]




// variable to store quiz timer
var quizTime = 120;

// setting user score to 0
var userScore = 0;

var questionIndex = 0;




// FUNCTIONS

// function works 
function startTime(){
    // once start button is clicked 
    // Timer goes down from 120 

    // and then I call on the function generate Question
    var quizInterval = setInterval(function(){
            // counts time down 
            quizTime --;

                // create visible timer so user can see time left
            timer.textContent = 'Time: ' + quizTime;
            if(quizTime <= 0 || questionIndex === quizQuestion.length){
                clearInterval(quizInterval)
            }
         }, 1000)

         generateQuestions();

};


function generateQuestions(){

    // hide initial info that is on intro page 
    quizTitle.textContent = '';
    quizBody.textContent = '';



       // and display question to user
     quizBody.textContent = quizQuestion[questionIndex];



     //create a new ol element and append to bodyEl
     var divEl = document.createElement('div')
     quizBody.appendChild(divEl);
    
    
    
     var olEl = document.createElement('ol')
    divEl.appendChild(olEl);
    console.log(olEl)
    
    
//     // loop thru variable quizQuestions.question[i].length
for(i = 0; i < quizQuestion.length ; i ++){

    questionIndex = i


 // create a new li element to attach choices on 
    var liEl = document.createElement('li');
    olEl.appendChild(liEl)


  // assign it a class of button 
    var btnEl = document.createElement('button');
    liEl.append(btnEl);



    btnEl.textContent = quizAnswer[questionIndex]


// attach event listener to that button 
    btnEl.addEventListener('click', function(){
        

        if(btnEl === quizAnswer[questionIndex]){
            questionIndex ++
        }


        })

    


}

    




 

  

    
    // need to call checkAnswer as a callback function of that event listener 

    // and append to bodyEl

    // create if statement to check if time is up, stop quiz


    
    // call on stop quiz function 





};



function checkAnswer(){

    // create if statements to check if the button clicked is === to quizQuestions.answer

    // if right move to next question 


    // else wrong stay at question
    // and take off 15 secs 

};


function endQuiz(){

    // display score
     // and prompt user for their initials  

    var userInput = window.prompt('Your score was '+ userScore + '\nPlease enter your initials');


 


    // store score and initials in local storage 



    // store in the high score section in navbar
};













// EVENT LISTENERS
          
startBtn.addEventListener('click', startTime);



