import { Aluno } from './Aluno.js';
export function q3() {
    let div = document.createElement("div");
    div.id = "q3";

    let h2 = document.createElement("h2");
    let titulo = document.createTextNode("Relatório da turma");
    h2.appendChild(titulo);
    div.appendChild(h2);

    // Gerar
    let divGerar = document.createElement("div");
    divGerar.id = "geracao";
    div.appendChild(divGerar);
    // Relatórios gerados
    let p = document.createElement("p");
    let qtdRelatorio = document.createTextNode("Relatórios gerados: 0");
    p.appendChild(qtdRelatorio);
    divGerar.appendChild(p);

    // Botão
    let button = document.createElement("input");
    button.id = "btnGerar";
    button.setAttribute("type", "button");
    button.setAttribute("value", "Gerar relatório");
    divGerar.appendChild(button);

    // Resultado
    let divResultado = document.createElement("div");
    div.appendChild(divResultado);
    // Tabela
    let tabelaResultado = document.createElement("table");
    tabelaResultado.id = "tabela";
    divResultado.appendChild(tabelaResultado);
    divResultado.id = "resultado";

    // Estatística
    let estatistica = document.createElement("div");
    estatistica.id = "estatistica";
    div.appendChild(estatistica);

    document.body.appendChild(div);


    // Script
    let btnGerar = document.querySelector("#btnGerar");
    
    function principal() {
        // Resultado
        const tabela = document.querySelector("#tabela");
        tabela.style.border = "1px solid black";

        let aprovados = 0;
        let reprovados = 0;

        tabela.innerHTML = `
            <tr style="border: 1px solid black">
                <th style="border: 1px solid black; font-weight: normal">Nome</th>
                <th style="border: 1px solid black; font-weight: normal">Nota</th>
                <th style="border: 1px solid black; font-weight: normal">Situação</th>
            </tr>`;

        function getRandomIntInclusive() {
            let min = Math.ceil(0);
            let max = Math.floor(100);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for (let i = 1; i<=20; i++) {
            let aluno = i;

            if (i<10) {
                aluno = '0' + i;
            }
            let nota = Math.round(getRandomIntInclusive() + (getRandomIntInclusive()/2));
            if (nota > 100) {
                nota = 100;
            }

            let a1 = new Aluno(`Aluno ${aluno}`, nota);

            let aprovadoEstilo = "";
            if (a1.situacao() == 'APROVADO') {
                aprovados++;
                aprovadoEstilo = "color: limegreen";
            } else {
                reprovados++;
                aprovadoEstilo = "color: red";
            }
            tabela.innerHTML += `
                <tr style="border: 1px solid black">
                    <th style="border: 1px solid black; font-weight: normal">${a1.aNome}</th>
                    <th style="border: 1px solid black; font-weight: normal">Nota: ${a1.aNota}</th>
                    <th style="border: 1px solid black; font-weight: normal; ${aprovadoEstilo}">${a1.situacao()}</th>
                </tr>`;
            
        }

        // Estatística
        const estatisticaDiv = document.querySelector("#estatistica");
        estatisticaDiv.innerHTML = `
            <h2>Estatística</h2>
            <p>Aprovados: ${aprovados}</p>
            <p>Reprovados: ${reprovados}</p>
        `;  
        
    }

    btnGerar.addEventListener("click", () => {
        principal();
    })
}