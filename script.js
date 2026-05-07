function getRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + hex.padStart(6, "0");
}

function generatePalette() {
    const palette = document.getElementById("palette");
    palette.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();

        const div = document.createElement("div");
        div.className = "color-box";
        div.style.background = color;

        const span = document.createElement("span");
        span.className = "color-code";
        span.textContent = color;

        div.appendChild(span);

        div.onclick = () => {
            navigator.clipboard.writeText(color);
            span.textContent = "Copied!";
            setTimeout(() => span.textContent = color, 1000);
        };

        palette.appendChild(div);


    }
}

generatePalette();
