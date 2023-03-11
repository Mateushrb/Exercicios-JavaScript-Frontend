export function q2() {
    let div = document.createElement("div");
    div.id = "q2";

    let h2 = document.createElement("h2");
    let titulo = document.createTextNode("Exercício 2");
    h2.appendChild(titulo);
    div.appendChild(h2);

    // Label
    let labelFat = document.createElement("label");
    labelFat.setAttribute("for", "labelFat");
    // Texto do label
    let labelFatText = document.createTextNode("Fatorial: ");
    labelFat.appendChild(labelFatText);
    // Input
    let inputFat = document.createElement("input");
    inputFat.id = "inputFat";
    inputFat.setAttribute("type", "number");
    // Botão
    let btnCalcular = document.createElement("input");
    btnCalcular.id = "btnCalcular";
    btnCalcular.setAttribute("type", "button");
    btnCalcular.setAttribute("value", "Calcular");
    // Resultado
    let divResultado = document.createElement("div");
    divResultado.id = "resultado";

    div.appendChild(labelFat);
    div.appendChild(inputFat);
    div.appendChild(btnCalcular);
    div.appendChild(divResultado);

    document.body.appendChild(div);


    // Script
    let entradaFat = document.querySelector("#inputFat");
    let calcular = document.querySelector("#btnCalcular");

    function principal() {
        let antes = Date.now();
        let resultado = 1
        for (let i = entradaFat.value; i>1; i--) {
            resultado *= i;
        }
        let duracao = Date.now() - antes;
        divResultado.innerHTML = `<p>Fatorial de ${entradaFat.value} <br>Resultado: ${resultado} <br>Tempo gasto: ${duracao}ms</p>`; 
    }

    calcular.addEventListener("click", () => {
        principal();
    })
    entradaFat.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
            principal();
            e.preventDefault;
        }
    })

}