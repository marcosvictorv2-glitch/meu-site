const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;

canvas.width = window.innerWidth;

const letras =
"アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const arrayLetras = letras.split("");

const tamanhoFonte = 16;

const colunas = canvas.width / tamanhoFonte;

const gotas = [];

for(let x = 0; x < colunas; x++){

    gotas[x] = 1;

}

function desenhar(){

    ctx.fillStyle = "rgba(0,0,0,0.08)";

    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#00ffcc";

    ctx.font = tamanhoFonte + "px monospace";

    for(let i = 0; i < gotas.length; i++){

        const texto =
        arrayLetras[Math.floor(Math.random() * arrayLetras.length)];

        ctx.fillText(texto, i * tamanhoFonte, gotas[i] * tamanhoFonte);

        if(
            gotas[i] * tamanhoFonte > canvas.height &&
            Math.random() > 0.975
        ){

            gotas[i] = 0;

        }

        gotas[i]++;

    }

}

setInterval(desenhar,35);

window.addEventListener("resize",()=>{

    canvas.height = window.innerHeight;

    canvas.width = window.innerWidth;

});