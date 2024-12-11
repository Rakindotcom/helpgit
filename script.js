document.addEventListener("DOMContentLoaded", () => {
    const copyButtons = document.querySelectorAll(".code-block .copybtn");

    copyButtons.forEach(button => {
        button.addEventListener("click", () => {
            const codeBlock = button.closest(".code-block");
            const pre = codeBlock.querySelector("pre");
            const codeText = pre.textContent;

            navigator.clipboard.writeText(codeText).then(() => {
                button.textContent = "Copied!";
                setTimeout(() => {
                    button.textContent = "Copy";
                }, 2000);
            }).catch(() => {
                console.error("Failed to copy text");
            });
        });
    });
});

let question = document.querySelectorAll('.question');
let answer = document.querySelectorAll('.answer');

for (let i = 0; i < question.length; i++) {
    question[i].addEventListener('click', function () {
        answer[i].classList.toggle('open');
        question[i].classList.toggle('open');

        for (let j = 0; j < question.length; j++) {
            if (j !== i) {
                answer[j].classList.remove('open');
                question[j].classList.remove('open');
            }
        }
    });
}