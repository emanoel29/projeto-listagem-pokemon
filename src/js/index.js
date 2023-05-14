/*
    o que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da pagína para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento de HTML correspondente ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe de modo-escuro no body
        - passo 5 - trocar a imagem do botão para troca de tema pra lua

    - objetivo 2 - quando clicar no botão de troca de tema, caso o body tenha a classe de modo-escuro, remover a classe para mudar pro tema claro e mudar a imagem pro sol
        - passo 6 - verificar se body já tem a classe modo-escuro
        - passo 7 - reover a classe modo-escoro do body
        - passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

//objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
    //passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if(modoEscuroEstaAtivo){
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/sun.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/moon.png");
    }
});