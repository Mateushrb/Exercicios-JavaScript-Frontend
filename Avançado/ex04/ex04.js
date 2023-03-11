export function q4() {
    let div = document.createElement("div");
    div.id = "q4";

    // Entrada de dados
    let divEntrada = document.createElement("div");
    divEntrada.id = "divEntrada";

    // Número de valores
    let labelNumValores = document.createElement("label");
    let labelNumValoresText = document.createTextNode("Digite a quantidade de valores: ");
    labelNumValores.appendChild(labelNumValoresText);
    
    let inputNumValores = document.createElement("input");
    inputNumValores.setAttribute("type", "number");
    inputNumValores.id = "inputValores";
    
    // Valor mínimo
    let labelValMin = document.createElement("label");
    let labelValMinText = document.createTextNode("Valor mínimo: ");
    labelValMin.appendChild(labelValMinText);

    let inputValMin = document.createElement("input");
    inputValMin.setAttribute("type", "number");
    inputValMin.id = "inputMin";

    // Valor máximo
    let labelValMax = document.createElement("label");
    let labelValMaxText = document.createTextNode("Valor máximo: ");
    labelValMax.appendChild(labelValMaxText);
    
    let inputValMax = document.createElement("input");
    inputValMax.setAttribute("type", "number");
    inputValMax.id = "inputMax";

    // Botão calcular
    let btnCalcular = document.createElement("input");
    btnCalcular.setAttribute("type", "button");
    btnCalcular.setAttribute("value", "Calcular");
    btnCalcular.id = "btnCalcular";

    // Saída de dados
    let divResultado = document.createElement("div");
    divResultado.id = "divResultado";

    // Quebra de linha
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");


    divEntrada.appendChild(labelNumValores);
    divEntrada.appendChild(inputNumValores);
    divEntrada.appendChild(br1);
    divEntrada.appendChild(labelValMin);
    divEntrada.appendChild(inputValMin);
    divEntrada.appendChild(br2);
    divEntrada.appendChild(labelValMax);
    divEntrada.appendChild(inputValMax);
    divEntrada.appendChild(br3);
    divEntrada.appendChild(btnCalcular);
    div.appendChild(divEntrada);
    div.appendChild(divResultado);

    document.body.appendChild(div);


    // Script

    const calcular = document.querySelector("#btnCalcular");
    const numValores = document.querySelector("#inputValores");
    const valMin = document.querySelector("#inputMin");
    const valMax = document.querySelector("#inputMax");
    const resultado = document.querySelector("#divResultado");

    function principal () {
        function getRandomIntInclusive() {
            let min = Math.ceil(parseInt(valMin.value));
            let max = Math.floor(parseInt(valMax.value));
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let arrayNumeros = new Array(numValores.value);
        let numero = 0;
        
        for (let i = 0; i<numValores.value; i++) {

            numero = getRandomIntInclusive();
            arrayNumeros[i] = numero;
        }
        let arrayGerado = ''
        for (let i = 0; i<arrayNumeros.length; i++) {
            arrayGerado += arrayNumeros[i] + ' ';
        }
        
        resultado.innerHTML = `<h2>Como não entendi que cálculo é para fazer, segue a baixo o array gerado</h2>
        <p>${arrayGerado}</p>`;

    }

    calcular.addEventListener("click", () => {
        principal();
    })
}