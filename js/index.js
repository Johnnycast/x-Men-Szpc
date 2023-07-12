const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo ({top: 0, behavior: 'smooth'});
        }

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');

        //OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        //Passo 1 - pegar o elemento do personagem grande para adicionar as informações nele
        alterarImagemPersonagemSelecionado(personagem);

        //passo 3 - alterar o nome do personagem grande

        alterarNomePersonagemSelecionado(personagem);

        //passo 4 - alterar a descrição do personagem grande

        alterarDescricaoPersonagem(personagem);
        

        
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    console.log(idPersonagem);
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
