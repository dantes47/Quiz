const questions = [
    {
        question: "What is 10 + 20?",
        options: ["6", "13", "30", "35"],
        answer: "30"
    },
    {
        question: "What is Tor's favorite weapon?",
        options: ["spear", "hammer", "lightning", "cup"],
        answer: "hammer" 
    },
    {
        question: "What is better one language from the programming languages?",
        options: ["js", "python", "c/c++", "rust"],
        answer: "js"
    }
];

let correct = 0;
let question_number = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

const load_question = () => {
    document.querySelector("#question").innerHTML = questions[question_number].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for(const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;

    }

    document.querySelectorAll(".option").forEach(option => {
            option.onclick = () => {
                alert(option.textContent);
            }
        });
     
}