const lampada = document.querySelector("#lampada");

function criarImg() {
    lampada.style.display = "block";
}

function acenderImg() {
    lampada.setAttribute('src', '../img/lampada_acesa.png');
    lampada.classList.add("acendeu");
}

function apagarImg() {
    lampada.setAttribute('src', '../img/lampada.png');
    lampada.classList.remove("acendeu");
}

function removerImg() {
    lampada.style.display = "none";
}

function botoes() {
    //criar lampada
    const btnCriar = document.querySelector("#btn_criar_lampada");
    btnCriar.addEventListener("click", criarImg, true);

    //acender lampada
    const btnAcender = document.querySelector("#btn_cender_lampada");
    btnAcender.addEventListener("click", acenderImg, true);

    //apagar lampada
    const apagar = document.querySelector("#btn_apagar_lampada");
    apagar.addEventListener("click", apagarImg, true);

    //remover lampada
    const remover = document.querySelector("#btn_remover_lampada");
    remover.addEventListener("click", removerImg, true);
}

document.addEventListener("DOMContentLoaded", botoes, false);

// animação do fundo
const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 11; i++) {
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 120));
    const position = random(1, 99);
    const delay = random(5, 0.1);
    const duration = random(24, 12);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

    ulSquares.appendChild(li);
}