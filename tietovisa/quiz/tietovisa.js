/*function f1() {
    let name = document.getElementById("formGroupExampleInput").value;
    document.getElementById("quiz").innerHTML = "";
    
}*/

function quiz (questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        let outPut = [];
        let answer; 

    }

    function showResults(questions, quizContainer, resultsContainer) {

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function() {
        showResults (questions, quizContainer, resultsContainer);
    }
}

const QUIZ_CONTAINER = document.getElementById("quiz");
const SUBMIT_BUTTON = document.getElementById("submit");

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