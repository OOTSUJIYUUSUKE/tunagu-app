document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit');
    const messageElement = document.getElementById('message');
    const answerInput = document.getElementById('answer');

    submitButton.addEventListener('click', () => {
        const userAnswer = answerInput.value.trim();
        const correctAnswer = "東京";

        if (userAnswer === '') {
            messageElement.textContent = '答えを入力してください。';
            return;
        }

        if (userAnswer === correctAnswer) {
            messageElement.textContent = '正解です！';
        } else {
            messageElement.textContent = '不正解です。もう一度試してください。';
        }
    });
});
