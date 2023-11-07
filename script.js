const questions = [
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        options: ["Berlin", "Paris", "London", "Rom"],
        correctAnswer: "Berlin"
    },
    {
        question: "Wie viele Kontinente gibt es auf der Erde?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "7"
    },
    {
        question: "Welcher Planet ist der dritte in unserem Sonnensystem?",
        options: ["Venus", "Mars", "Erde", "Jupiter"],
        correctAnswer: "Erde"
    },
    {
        question: "Wer schrieb das Drama 'Romeo und Julia'?",
        options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Jane Austen"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "Welcher Fluss fließt durch Kairo?",
        options: ["Nil", "Donau", "Amazonas", "Themse"],
        correctAnswer: "Nil"
    },
    {
        question: "In welchem Land wurde das Spiel Schach erfunden?",
        options: ["Indien", "China", "Russland", "Japan"],
        correctAnswer: "Indien"
    },
    {
        question: "Was ist die chemische Formel für Wasser?",
        options: ["H2O2", "CO2", "H2O", "CH4"],
        correctAnswer: "H2O"
    },
    {
        question: "Wer malte die 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Rembrandt"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Wie viele Herzkammern hat das menschliche Herz?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "4"
    },
    {
        question: "Welches Element hat das chemische Symbol 'Na'?",
        options: ["Natrium", "Nickel", "Neptunium", "Neodym"],
        correctAnswer: "Natrium"
    },
    {
        question: "Welches Land wird als das 'Land der aufgehenden Sonne' bezeichnet?",
        options: ["China", "Indien", "Japan", "Südkorea"],
        correctAnswer: "Japan"
    },
    {
        question: "Was ist die Hauptstadt von Australien?",
        options: ["Melbourne", "Sydney", "Canberra", "Brisbane"],
        correctAnswer: "Canberra"
    },
    {
        question: "Wer schrieb 'Die Odyssee'?",
        options: ["Homer", "Virgil", "Plato", "Sappho"],
        correctAnswer: "Homer"
    },
    {
        question: "Wie viele Monde hat die Erde?",
        options: ["1", "2", "0", "3"],
        correctAnswer: "1"
    },
    {
        question: "In welchem Jahr fand die erste bemannte Mondlandung statt?",
        options: ["1969", "1974", "1981", "1957"],
        correctAnswer: "1969"
    },
    {
        question: "Was ist der höchste Berg der Welt?",
        options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Matterhorn"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "Welches Gas atmen Pflanzen ein und Sauerstoff ab?",
        options: ["Stickstoff", "Sauerstoff", "Kohlendioxid", "Wasserstoff"],
        correctAnswer: "Kohlendioxid"
    },
    {
        question: "Was ist die kleinste Primzahl?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "2"
    },
    {
        question: "Wer schrieb 'Die Leiden des jungen Werther'?",
        options: ["Johann Wolfgang von Goethe", "Friedrich Schiller", "Heinrich Heine", "Thomas Mann"],
        correctAnswer: "Johann Wolfgang von Goethe"
    },
    {
        question: "Was ist die Hauptkomponente der Erdatmosphäre?",
        options: ["Sauerstoff", "Kohlenstoffdioxid", "Stickstoff", "Wasserstoff"],
        correctAnswer: "Stickstoff"
    },
];


let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `Frage ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.classList.add("option");
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    if (currentQuestionIndex === questions.length - 1) {
        displayResult();
    } else {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function displayResult() {
    questionElement.textContent = "";
    optionsContainer.innerHTML = "";
    resultElement.textContent = `Du hast ${score} von ${questions.length} Fragen richtig beantwortet.`;
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    displayQuestion();
    nextButton.style.display = "none";
});

displayQuestion();