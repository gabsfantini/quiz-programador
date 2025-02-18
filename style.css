const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Definir o tamanho do canvas
canvas.width = 400;
canvas.height = 400;

// Definir a velocidade do jogo
const speed = 100; // milissegundos por frame

let snake = [{ x: 150, y: 150 }];
let direction = 'RIGHT';
let food = generateFood();
let score = 0;

// Função para gerar comida aleatória
function generateFood() {
    let x = Math.floor(Math.random() * 20) * 20;
    let y = Math.floor(Math.random() * 20) * 20;
    return { x, y };
}

// Função para desenhar a cobrinha e a comida
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    // Desenha a cobrinha
    snake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? 'green' : 'white'; // Cabeça da cobrinha verde, o resto branco
        ctx.fillRect(segment.x, segment.y, 20, 20);
    });

    // Desenha a comida
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, 20, 20);

    // Exibe o placar
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 20);
}

// Função para mover a cobrinha
function move() {
    let head = { ...snake[0] };

    if (direction === 'LEFT') head.x -= 20;
    if (direction === 'RIGHT') head.x += 20;
    if (direction === 'UP') head.y -= 20;
    if (direction === 'DOWN') head.y += 20;

    snake.unshift(head); // Adiciona a cabeça no início

    // Verifica se a cobrinha comeu a comida
    if (head.x === food.x && head.y === food.y) {
        score += 10; // Aumenta o placar
        food = generateFood(); // Gera uma nova comida
    } else {
        snake.pop(); // Remove a cauda da cobrinha
    }

    // Verifica se a cobrinha bateu nas bordas ou em si mesma
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height || checkCollision()) {
        resetGame();
    }
}

// Função para verificar colisão com o próprio corpo
function checkCollision() {
    const head = snake[0];
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

// Função para resetar o jogo
function resetGame() {
    snake = [{ x: 150, y: 150 }];
    direction = 'RIGHT';
    score = 0;
    food = generateFood();
}

// Função para controlar a direção
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && direction !== 'RIGHT') {
        direction = 'LEFT';
    }
    if (event.key === 'ArrowRight' && direction !== 'LEFT') {
        direction = 'RIGHT';
    }
    if (event.key === 'ArrowUp' && direction !== 'DOWN') {
        direction = 'UP';
    }
    if (event.key === 'ArrowDown' && direction !== 'UP') {
        direction = 'DOWN';
    }
});

// Função para atualizar o jogo a cada intervalo
function update() {
    move();
    draw();
}

// Inicia o jogo
setInterval(update, speed);
