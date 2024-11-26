<!-- Difficulty text generator-->
document.addEventListener('DOMContentLoaded', function () {
    const texts = {
        easy: [
            "The cat sat on the mat.",
            "A quick brown fox jumps over the lazy dog.",
            "Hello world!"
        ],
        medium: [
            "Typing is a skill that requires practice.",
            "JavaScript is a versatile programming language.",
            "The quick brown fox jumps over the lazy dog."
        ],
        hard: [
            "To be or not to be, that is the question.",
            "In the beginning, there was nothing but darkness.",
            "The quick brown fox jumps over the lazy dog multiple times."
        ]
    };

    const selectElement = document.querySelector('.form-select');
    const testTextElement = document.querySelector('.test-text');

    function updateTestText() {
        const difficulty = selectElement.value.toLowerCase();
        const selectedTexts = texts[difficulty];
        const randomText = selectedTexts[Math.floor(Math.random() * selectedTexts.length)];
        testTextElement.textContent = randomText;
    }

    selectElement.addEventListener('change', updateTestText);

    // Trigger change event on page load to display initial text
    updateTestText();

    let startTime;
    let endTime;

    function startTest() {
        startTime = new Date();
        document.querySelector('.btn-start').disabled = true;
        document.querySelector('.btn-stop').disabled = false;
        const userInput = document.querySelector('.form-control');
        userInput.disabled = false;
        userInput.value = ''; // Clear the text area
        userInput.focus(); // Focus on the text area
    }

    function stopTest() {
        endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // time in seconds
        document.querySelector('.btn-stop').disabled = true;
        document.querySelector('.btn-start').disabled = false;
        const userInput = document.querySelector('.form-control');
        userInput.disabled = true;
        const wpm = calculateWPM(userInput.value, timeTaken);
        displayResults(timeTaken, wpm);
    }

    function calculateWPM(userInput, timeTaken) {
        const sampleText = document.querySelector('.test-text').textContent;
        const userWords = userInput.trim().split(/\s+/);
        const sampleWords = sampleText.trim().split(/\s+/);
        let correctWords = 0;

        for (let i = 0; i < userWords.length; i++) {
            if (userWords[i] === sampleWords[i]) {
                correctWords++;
            }
        }

        const minutes = timeTaken / 60;
        return Math.round(correctWords / minutes);
    }

    function displayResults(time, wpm) {
        const timeElement = document.querySelector('.results-time');
        timeElement.textContent = `Time: ${time.toFixed(2)}s`;

        const wpmElement = document.querySelector('.results-wpm');
        wpmElement.textContent = `WPM: ${wpm}`;

        const difficultyElement = document.querySelector('.results-difficulty');
        const difficulty = document.querySelector('.form-select').value;
        difficultyElement.textContent = `Level: ${difficulty}`;
    }

    document.querySelector('.btn-start').addEventListener('click', startTest);
    document.querySelector('.btn-stop').addEventListener('click', stopTest);
});