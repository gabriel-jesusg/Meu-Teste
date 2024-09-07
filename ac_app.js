function gerarMensagemErro(mensagem) {
    return `<div class="erro">
        <p>${mensagem}</p>
    </div>`;
}

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p class='erro'>Nada foi encontrado. Você precisa digitar o nome do personagem ou jogo</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let jogo = "";
    let anoLancamento = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        jogo = dado.jogo.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || jogo.includes(campoPesquisa) || anoLancamento.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p></p>
                <p class="descricao-jogo">${dado.jogo}</p>
                <p class="descricao-jogo">${dado.plataformas}</p>
                <p class="descricao-jogo">${dado.anoLancamento}</p>
                <p></p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = gerarMensagemErro('Nada foi encontrado. Você precisa digitar o nome do personagem ou jogo.');
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}