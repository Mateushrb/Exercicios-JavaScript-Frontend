export function q5() {
    let div = document.createElement("div");
    div.id = "q5";

    // Título
    let titulo = document.createElement("h2");
    let tituloText = document.createTextNode("Tipo de triangulo");
    titulo.appendChild(tituloText);

    // Entrada de dados
    let divEntrada = document.createElement("div");
    divEntrada.id = "divEntrada";

    // // // Caixa 1 // // //
    // Label
    let labelCx1 = document.createElement("label");
    let labelCx1Text = document.createTextNode("Lado A: ");
    labelCx1.appendChild(labelCx1Text);
    // Caixa
    let cx1 = document.createElement("input");
    cx1.setAttribute("type", "number");
    cx1.id = "cx1";

    // // // Caixa 2 // // //
    // Label
    let labelCx2 = document.createElement("label");
    let labelCx2Text = document.createTextNode("Lado B: ");
    labelCx2.appendChild(labelCx2Text);
    // Caixa
    let cx2 = document.createElement("input");
    cx2.setAttribute("type", "number");
    cx2.id = "cx2";

    // // // Caixa 3 // // //
    //Label
    let labelCx3 = document.createElement("label");
    let labelCx3Text = document.createTextNode("Lado C: ");
    labelCx3.appendChild(labelCx3Text);
    // Caixa
    let cx3 = document.createElement("input");
    cx3.setAttribute("type", "number");
    cx3.id = "cx3";

    // // // Botão // // //
    let btnCalcular = document.createElement("input");
    btnCalcular.setAttribute("type", "button");
    btnCalcular.setAttribute("value", "Calcular");
    btnCalcular.id = "btnCalcular";

    // // // Resultado // // //
    let divResultado = document.createElement("div");
    divResultado.id = "divResultado";

    // Quebra de linha
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");


    divEntrada.appendChild(labelCx1);
    divEntrada.appendChild(cx1);
    divEntrada.appendChild(br1);
    divEntrada.appendChild(labelCx2);
    divEntrada.appendChild(cx2);
    divEntrada.appendChild(br2);
    divEntrada.appendChild(labelCx3);
    divEntrada.appendChild(cx3);
    divEntrada.appendChild(br3);
    divEntrada.appendChild(btnCalcular);

    div.appendChild(titulo);
    div.appendChild(divEntrada);
    div.appendChild(divResultado);

    document.body.appendChild(div);


    // Script
    const calcular = document.querySelector("#btnCalcular");

    const ladoA = document.querySelector("#cx1");
    const ladoB = document.querySelector("#cx2");
    const ladoC = document.querySelector("#cx3");

    const resultado = document.querySelector("#divResultado");


    let trianguloN = 0
    function principal() {
        trianguloN++;
        let triangulo = `O triangulo ${trianguloN} é: `;

        if (parseInt(ladoA.value) == parseInt(ladoB.value) && parseInt(ladoA.value) == parseInt(ladoC.value)) {
            triangulo += "EQUILÁTERO";
        } else if (parseInt(ladoA.value) != parseInt(ladoB.value) && parseInt(ladoA.value) != parseInt(ladoC.value) && parseInt(ladoB.value) != parseInt(ladoC.value)) {
            triangulo += "ESCALENO";
        } else {
            triangulo += "ISÓSCELES";
        }

        resultado.innerHTML += `<p>${triangulo}</p>`
    }

    calcular.addEventListener("click", () => {
        principal();
    })

}