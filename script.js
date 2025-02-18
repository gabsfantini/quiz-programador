const coracao = document.getElementById('coracao');

// Parar o movimento do coração ao clicar
coracao.addEventListener('click', () => {
    coracao.style.animationPlayState = coracao.style.animationPlayState === 'paused' ? 'running' : 'paused';
});
