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
});