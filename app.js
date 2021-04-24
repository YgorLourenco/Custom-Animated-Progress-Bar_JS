const progress = document.querySelector('.progress-done')

// setTimeout e uma função que e ativada por um tempo estipulado
// Depois do tempo estipulado, ele coloca um número e largura e opacidade no CSS, criado assim o efeito de animação
setTimeout(function() {
    progress.style.width = progress.getAttribute('data-done') + '%'
    progress.style.opacity = 1
}, 500)