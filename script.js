function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoOcorrencias = document.getElementById("campo-ocorrencias");

    let cap01_10 = joao.capitulos;
    let cap11_21 = capitulos11_21_joao;
    let dados = joao;
    dados.capitulos = cap01_10.concat(cap11_21);
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();
    if (campoPesquisa == "") {
        section.innerHTML = "<p>O campo pesquisa está vazio.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let capitulos = [];
    let versos = [];
    let eventos = [];
    let evento = [];
    let eventoSaida = "";
    let ocorrencias = 0;
    let url = "https://www.bibliaonline.com.br/ntlh/jo/";

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
                eventoSaida = "";
                if (evento.length) {
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
                        <p class="url">Bíblia Online: 
                            <a href="${url}${capitulo.numero}" target="_blank">
                                ${url}${capitulo.numero}
                            </a>
                        </p>
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
1 Depois disso, Jesus apareceu outra vez aos seus discípulos, na beira do lago da Galileia. Foi assim que aconteceu:
2 Estavam juntos Simão Pedro e Tomé, chamado "o Gêmeo"; Natanael, que era de Caná da Galileia; os filhos de Zebedeu e mais dois discípulos.
3 Simão Pedro disse aos outros: — Eu vou pescar. — Nós também vamos pescar com você! — disseram eles. Então foram todos e subiram no barco, mas naquela noite não pescaram nada.
4 De manhã, quando começava a clarear, Jesus estava na praia. Porém eles não sabiam que era ele.
5 Então Jesus perguntou: — Moços, vocês pescaram alguma coisa? — Nada! — responderam eles.
6 — Joguem a rede do lado direito do barco, que vocês acharão peixe! — disse Jesus. Eles jogaram a rede e logo depois já não conseguiam puxá-la para dentro do barco, por causa da grande quantidade de peixes que havia nela.
7 Aí o discípulo que Jesus amava disse a Pedro: — É o Senhor Jesus! Quando Simão Pedro ouviu dizer que era o Senhor, vestiu a capa, pois havia tirado a roupa, e se jogou na água.
8 Os outros discípulos foram no barco, puxando a rede com os peixes, pois estavam somente a uns cem metros da praia.
9 Quando saíram do barco, viram ali uma pequena fogueira, com alguns peixes em cima das brasas. E também havia pão.
10 Então Jesus disse: — Tragam alguns desses peixes que vocês acabaram de pescar.
11 Aí Simão Pedro subiu no barco e arrastou a rede para a terra. Ela estava cheia, com cento e cinquenta e três peixes grandes, e mesmo assim não se rebentou.
12 Jesus disse: — Venham comer! Nenhum deles tinha coragem de perguntar quem ele era, pois sabiam que era o Senhor.
13 Então Jesus veio, pegou o pão e deu a eles. E fez a mesma coisa com os peixes.
14 Foi esta a terceira vez que Jesus, depois de ter sido ressuscitado, apareceu aos seus discípulos.
15 Quando eles acabaram de comer, Jesus perguntou a Simão Pedro: — Simão, filho de João, você me ama mais do que estes outros me amam? — Sim, o senhor sabe que eu o amo, Senhor! — respondeu ele. Então Jesus lhe disse: — Tome conta das minhas ovelhas!
16 E perguntou pela segunda vez: — Simão, filho de João, você me ama? Pedro respondeu: — Sim, o senhor sabe que eu o amo, Senhor! E Jesus lhe disse outra vez: — Tome conta das minhas ovelhas!
17 E perguntou pela terceira vez: — Simão, filho de João, você me ama? Então Pedro ficou triste por Jesus ter perguntado três vezes: "Você me ama?" E respondeu: — O senhor sabe tudo e sabe que eu o amo, Senhor! E Jesus ordenou: — Tome conta das minhas ovelhas.
18 Quando você era moço, você se aprontava e ia para onde queria. Mas eu afirmo a você que isto é verdade: quando for velho, você estenderá as mãos, alguém vai amarrá-las e o levará para onde você não vai querer ir.
19 Ao dizer isso, Jesus estava dando a entender de que modo Pedro ia morrer e assim fazer com que Deus fosse louvado. Então Jesus disse a Pedro: — Venha comigo!
20 Então Pedro virou para trás e viu que o discípulo que Jesus amava vinha atrás dele. Este era o mesmo que estava ao lado de Jesus durante o jantar da Páscoa e que havia chegado para mais perto dele e perguntado: "Senhor, quem é o traidor?"
21 Quando Pedro viu aquele discípulo, perguntou a Jesus: — O que diz, Senhor, a respeito deste aqui?
22 Jesus respondeu: — Se eu quiser que ele viva até que eu volte, o que é que você tem com isso? Venha comigo!
23 Então se espalhou entre os seguidores de Jesus a notícia de que aquele discípulo não ia morrer. Mas Jesus não disse isso. Ele apenas disse: "Se eu quiser que ele viva até que eu volte, o que é que você tem com isso?"
24 Este é o discípulo que falou destas coisas e as escreveu. E nós sabemos que o que ele disse é verdade.
25 Ainda há muitas outras coisas que Jesus fez. Se todas elas fossem escritas, uma por uma, acho que nem no mundo inteiro caberiam os livros que seriam escritos.
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
const eventosCapitulo = ["Jesus aparece a sete discípulos", "Pedro é Questionado", "O Testemunho de João"];

    // Criar o objeto do capítulo
    const capitulo = {
        numero: 21, // Ajustar o número do capítulo conforme necessário
        versos: versos,
        eventos: eventosCapitulo
    };

    let pre = document.getElementById("pre");
    pre.innerHTML = JSON.stringify(capitulo);

}
//criarObjetoCapitulo();

