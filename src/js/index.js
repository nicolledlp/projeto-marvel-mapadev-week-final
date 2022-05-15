// uma linha de comentário
/* varias linhas de comentario
 
OBJETIVO 1: quando passar o mouse em cima do personagem temos que: 

    - colocar a classe selecionado no personagem que passamos o mouse em cima 
    para adicionar a animacao
    - retirar a classe selecionado do personagem que esta selecionado

OBJETIVO 2: quando passar o mouse em cima do personagem vamos:

    - trocar a imagem e nome do personagem grande em destaque
        - alterar imagem do personagem destaque (jogador 1)
        - alterar o nome do personagem destaque (jogador 1)

*/

// OBJETIVO 1

// const homemDeFerro = document. getElementById('homem-de-ferro')

// console.log(homemDeFerro)

/*homemDeFerro.addEventListener('mouseenter', () => {
   homemDeFerro.classList.add('selecionado');
})*/
// let e const - usar sempre var e muito especifico

const personagens = document.querySelectorAll('.personagem')
// Aqui vc remove selecao do anterior quando selecionar o proximo
personagens.forEach((personagem) => { 
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado ==='ultron') return;
// aqui acima eu coloco o bloqueio da operação quando chega no ultron, pois ele ja esta selecionado.
//  daqui para baixo ele nao carrega as funcoes para nao mostrar o ultron


        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

// OBJETIVO 2 
        
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`; 

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;


    })
})


