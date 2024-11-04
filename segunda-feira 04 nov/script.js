// Inicializando o efeito ScrollReveal na primeira seção (#section1)
ScrollReveal().reveal('#section1', { 
    duration: 1000, // Duração do efeito (em milissegundos), define a velocidade da transição
    origin: 'bottom', // Origem do efeito: o conteúdo virá de baixo para cima
    distance: '50px' // Distância que o elemento "viaja" antes de aparecer
});

// Configurando o efeito ScrollReveal na segunda seção (#section2)
ScrollReveal().reveal('#section2', { 
    duration: 1000, // Duração do efeito de revelação
    origin: 'right', // Origem do efeito: o conteúdo virá da direita para a esquerda
    distance: '50px' // Distância do movimento antes do elemento se revelar
});
