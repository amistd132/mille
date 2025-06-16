
function generateGrids() {
    const results = document.getElementById("results");
    results.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const mainNumbers = getUniqueRandomNumbers(1, 50, 5).sort((a, b) => a - b);
        const stars = getUniqueRandomNumbers(1, 12, 2).sort((a, b) => a - b);
        results.innerHTML += `<p><strong>Grille ${i+1}</strong>: ${mainNumbers.join(", ")} ⭐ (${stars.join(", ")})</p>`;
    }
}

function getUniqueRandomNumbers(min, max, count) {
    const numbers = new Set();
    while (numbers.size < count) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.add(num);
    }
    return Array.from(numbers);
}
