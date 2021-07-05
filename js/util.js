import {creaParticulas, dibujaParticulas, mueveParticulas} from "./app.js"

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let particulas = [];
let numPart = 100;

window.onload = function () {
    loop();

    canvas.addEventListener("mousedown", function (e) {
        let x = e.clientX - canvas.getBoundingClientRect().left;
        let y = e.clientY - canvas.getBoundingClientRect().top;

        creaParticulas(x, y)
    })
};

class Particula {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radio = 5;

        if (Math.random() < .5) {
            this.color = "#FF8000";
        } else {
            this.color = "purple";
        }

        this.vx = 3 - Math.random() * 6;
        this.vy = 3 - Math.random() * 6;

        this.dibuja = function () {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI)
            ctx.fill()
        }

        this.mueve = function () {
            this.x += this.vx;
            this.y += this.vy;
        }
    }
}

function loop() {
    ctx.fillStyle = "#2D572C";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    dibujaParticulas();
    mueveParticulas();
    requestAnimationFrame(loop);
}

export{
    particulas,
    numPart,
    Particula
}