/*function f1() {
    let name = document.getElementById("formGroupExampleInput").value;
    document.getElementById("quiz").innerHTML = "";
    
}*/

function quiz (questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        let outPut = [];
        let answers; 

        for(let i=0; i<questions.lenght; i++) {
            answers = [];

            for(letter in questions[i].answers) {
                answers.push(
                    'label' + 'input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ": " + questions[i].answers[letter] + '</label>'
                );
            }

            outPut.push(
                'div class="question"' + questions[i].question + '</div>' 
                + 'div class="answers"' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = outPut.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        let answerContainers = quizContainer.querySelectorAll('.answers');

        let userAnswer = '';
        let numCorrect = 0;

        for(let i=0; i<questions.lenght; i++) {
            userAnswer= (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {} ).value;

            if(userAnswer===questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = "lightgreen";
            } else {
                answerContainers[i].style.color = "red";
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function() {
        showResults (questions, quizContainer, resultsContainer);
    }
}



let allQuestions = [
    {
        question = "Kuinka monta maanosaa on?",
        answers: {
            a: "5",
            b: "7",
            c: "10",
            d: "4"
        },
        correctAnswer = "b"
    },

    {
        question = "Minkä maan pääkaupunki Madrid on?",
        answers: {
            a: "Ruotsin", 
            b: "Saksan",
            c: "Espanjan",
            d: "Ranskan"
        },
        correctAnswer = "c"
    },

    { 
      question = "Kuinka monessa päivässä maa kierää auringon?",
      answers: {
        a: "200:ssa",
        b: "90:ssä",
        c: "150:ssa",
        d: "365:ssä"
      },
      correctAnswer = "d"
    },

    {
        question = "Mikä maa on pinta-alaltaan maailman pienin valtio?",
        answers = {
            a: "Vatikaani",
            b: "Islanti",
            c: "Monaco",
            d: "Portugali"
        },
        correctAnswer = "a"
    },

    {
        question = "Mikä maa on pinta-alaltaan maailman suurin valtio?",
        answers = {
            a: "Yhdysvallat",
            b: "Kanada",
            c: "Kiina",
            d: "Venäjä"
        },
        correctAnswer = "d"
    }
];