function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoOcorrencias = document.getElementById("campo-ocorrencias");

    let dados = joao;

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
    if (campoPesquisa == "") {
        section.innerHTML = "<p>O campo pesquisa está vazio.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let capitulos = "";
    let versos = "";
    let eventos = "";
    let evento = [];
    let eventoSaida = "";
    let ocorrencias = 0;

    // Itera sobre os dados e constrói o HTML dos resultados
    capitulos = dados.capitulos;
    for (let capitulo of capitulos) {
        versos = capitulo.versos;
        eventos = capitulo.eventos;
        evento = [];
        let nc = (capitulo.numero < 10) ? "0" : "";
        nc += capitulo.numero;
        for (let cadaEvento of eventos) {
            if (cadaEvento.toLowerCase().includes(campoPesquisa) && !evento.includes(cadaEvento)) {
                evento.push(cadaEvento);
            }
        }
        for (let verso of versos) {
            let nv = (verso.numero < 10) ? "0" : "";
            nv += verso.numero;
            if (verso.texto.toLowerCase().includes(campoPesquisa)) {
                if (evento.length) {
                    eventoSaida = "";
                    for (let ev of evento) {
                        eventoSaida += "<p class=\"descricao-meta-evento\">" +
                            "Evento importante: " + ev + "</p>";
                    }
                }
                ocorrencias++;
                resultados += `
                <div class="item-resultado">
                    <h2>
                        <span style="font-weight: normal;">Referência:</span> João ${nc}:${nv}
                        <span class="ntlh"> NTLH</span></h2>
                    <div class="container">
                        <p class="descricao-meta">
                            ${verso.texto}
                        </p>
                        ${eventoSaida}
                    </div>
                </div>`;
            }
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
    campoOcorrencias.innerHTML = `<p>${ocorrencias} Ocorrência${(ocorrencias < 2) ? "":"s"}</p>`;
}

function limpar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoOcorrencias = document.getElementById("campo-ocorrencias");
    let campoPesquisa = document.getElementById("campo-pesquisa");
    section.innerHTML = "";
    campoOcorrencias.innerHTML = `<p>0 Ocorrência</p>`;
    campoPesquisa.value = "";
}

// Exemplo de uso:
/* O texto do capítulo fornecido na sua pergunta */
//Peguei cada capítulo em https://www.bibliaonline.com.br/ntlh/jo/4
const textoCapitulo = `
1 Jesus disse: — Eu afirmo a vocês que isto é verdade: quem não entra no curral das ovelhas pela porta, mas pula o muro é um ladrão e bandido.
2 Mas quem entra pela porta é o pastor do rebanho.
3 O porteiro abre a porta para ele. As ovelhas reconhecem a sua voz quando ele as chama pelo nome, e ele as leva para fora do curral.
4 Quando todas estão do lado de fora, ele vai na frente delas, e elas o seguem porque conhecem a voz dele.
5 Mas de jeito nenhum seguirão um estranho! Pelo contrário, elas fugirão, pois não conhecem a voz de estranhos.
6 Jesus fez esta comparação, mas ninguém entendeu o que ele queria dizer.
7 Então Jesus continuou: — Eu afirmo a vocês que isto é verdade: eu sou a porta por onde as ovelhas passam.
8 Todos os que vieram antes de mim são ladrões e bandidos, mas as ovelhas não deram atenção à voz deles.
9 Eu sou a porta. Quem entrar por mim será salvo; poderá entrar e sair e achará comida.
10 O ladrão só vem para roubar, matar e destruir; mas eu vim para que as ovelhas tenham vida, a vida completa.
11 — Eu sou o bom pastor; o bom pastor dá a vida pelas ovelhas.
12 Um empregado trabalha somente por dinheiro; ele não é pastor, e as ovelhas não são dele. Por isso, quando vê um lobo chegando, ele abandona as ovelhas e foge. Então o lobo ataca e espalha as ovelhas.
13 O empregado foge porque trabalha somente por dinheiro e não se importa com as ovelhas.
14,15 Eu sou o bom pastor. Assim como o Pai me conhece, e eu conheço o Pai, assim também conheço as minhas ovelhas, e elas me conhecem. E estou pronto para morrer por elas.
16 Tenho outras ovelhas que não estão neste curral. Eu preciso trazer essas também, e elas ouvirão a minha voz. Então elas se tornarão um só rebanho com um só pastor.
17 — O Pai me ama porque eu dou a minha vida para recebê-la outra vez.
18 Ninguém tira a minha vida de mim, mas eu a dou por minha própria vontade. Tenho o direito de dá-la e de tornar a recebê-la, pois foi isso o que o meu Pai me mandou fazer.
19 Quando ouviu isso, o povo se dividiu outra vez. Muitos diziam:
20 — Ele está dominado por um demônio! Está louco! Por que é que vocês escutam o que ele diz?
21 Outros afirmavam: — Quem está dominado por um demônio não fala assim! Será que um demônio pode dar vista aos cegos?
22 Era inverno, e em Jerusalém estavam comemorando a Festa da Dedicação.
23 Jesus estava andando pelo pátio do Templo, perto da entrada chamada "Alpendre de Salomão".
24 Então o povo se ajuntou em volta dele e perguntou: — Até quando você vai nos deixar na dúvida? Diga com franqueza: você é ou não é o Messias?
25 Jesus respondeu: — Eu já disse, mas vocês não acreditaram. As obras que eu faço pelo poder do nome do meu Pai falam a favor de mim,
26 mas vocês não creem porque não são minhas ovelhas.
27 As minhas ovelhas escutam a minha voz; eu as conheço, e elas me seguem.
28 Eu lhes dou a vida eterna, e por isso elas nunca morrerão. Ninguém poderá arrancá-las da minha mão.
29 O poder que o Pai me deu é maior do que tudo, e ninguém pode arrancá-las da mão dele.
30 Eu e o Pai somos um.
31 Então eles tornaram a pegar pedras para matar Jesus.
32 E ele disse: — Eu fiz diante de vocês muitas coisas boas que o Pai me mandou fazer. Por causa de qual delas vocês querem me matar?
33 Eles responderam: — Não é por causa de nenhuma coisa boa que queremos matá-lo, mas porque, ao dizer isso, você está blasfemando contra Deus. Pois você, que é apenas um ser humano, está se fazendo de Deus.
34 Então Jesus afirmou: — Na Lei de vocês está escrito que Deus disse: "Vocês são deuses."
35 Sabemos que as Escrituras Sagradas sempre dizem a verdade, e sabemos que, de fato, Deus chamou de deuses aqueles que receberam a sua mensagem.
36 Quanto a mim, o Pai me escolheu e me enviou ao mundo. Então por que vocês dizem que blasfemo contra Deus quando afirmo que sou Filho dele?
37 Se não faço o que o meu Pai manda, não creiam em mim.
38 Mas, se eu faço, e vocês não creem em mim, então creiam pelo menos nas coisas que faço. E isso para que vocês fiquem sabendo de uma vez por todas que o Pai vive em mim e que eu vivo no Pai.
39 A essa altura tentaram novamente prendê-lo, mas Jesus escapou das mãos deles.
40 Ele voltou de novo para o lado leste do rio Jordão, foi para o lugar onde João Batista tinha batizado antes e ficou lá.
41 E muita gente ia vê-lo, dizendo: — João não fez nenhum milagre, mas tudo o que ele disse sobre Jesus é verdade.
42 E naquele lugar muita gente creu em Jesus.
`;

// Adicionar o capítulo ao objeto principal 'joao'
//joao.capitulos.push(capitulo);

function criarObjetoCapitulo() {
    // Dividir o texto em versos
    const versos = textoCapitulo.split('\n').map((verso, index) => {
        return {
            numero: index,
            texto: verso.trim().slice(1 + index.toString().length)
        };
    });

    // Identificar os eventos manualmente (pode ser aprimorado com NLP)
    const eventosCapitulo = ["Jesus, O Pastor Verdadeiro", "Jesus é a Porta", "O Povo Rejeita Jesus"];

    // Criar o objeto do capítulo
    const capitulo = {
        numero: 10, // Ajustar o número do capítulo conforme necessário
        versos: versos,
        eventos: eventosCapitulo
    };

    let pre = document.getElementById("pre");
    pre.innerHTML = JSON.stringify(capitulo);

}
//criarObjetoCapitulo();

