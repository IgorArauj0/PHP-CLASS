// Inicializando o efeito ScrollReveal na primeira seção (#section1)
ScrollReveal().reveal('#section1', { 
    duration: 2000, // Duração do efeito (em milissegundos), define a velocidade da transição
    origin: 'top', // Origem do efeito: o conteúdo virá de baixo para cima
    distance: '100px', // Distância que o elemento "viaja" antes de aparecer
});

// Configurando o efeito ScrollReveal na segunda seção (#section2)
ScrollReveal().reveal('#section2', { 
    duration: 1000, // Duração do efeito de revelação
    origin: 'right', // Origem do efeito: o conteúdo virá da direita para a esquerda
    distance: '50px' // Distância do movimento antes do elemento se revelar
});

// Configurando o efeito ScrollReveal na segunda seção (#section2)
ScrollReveal().reveal('#title', { 
    duration: 1000, // Duração do efeito de revelação
    origin: 'bottom', // Origem do efeito: o conteúdo virá da direita para a esquerda
    distance: '50px' // Distância do movimento antes do elemento se revelar
});
