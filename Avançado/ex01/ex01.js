export function q1() {
    let div = document.createElement("div");
    div.id = "q1";
    
    let h2 = document.createElement("h2");
    let titulo = document.createTextNode("Exercício 1");
    h2.appendChild(titulo);
    div.appendChild(h2);

    let br = document.createElement("br");
    let br2 = document.createElement("br");


    // Valor mínimo
    let labelMin = document.createElement("label");
    labelMin.setAttribute("for", "min");
    let labelMinText = document.createTextNode("Valor mínimo");
    labelMin.appendChild(labelMinText);
    let inputMin = document.createElement("input");
    inputMin.setAttribute("type", "number");
    inputMin.id = "min";


    // Valor máximo
    let labelMax = document.createElement("label");
    labelMax.setAttribute("for", "Valor máximo");
    let labelMaxText = document.createTextNode("Valor máximo");
    labelMax.appendChild(labelMaxText);
    let inputMax = document.createElement("input");
    inputMax.setAttribute("type", "number");
    inputMax.id = "max";


    // Botão contar
    let btnContar = document.createElement("input");
    btnContar.setAttribute("type", "button");
    btnContar.setAttribute("value", "Contar");
    btnContar.id = "btnContar";


    // Resultado
    let divResultado = document.createElement("div");
    divResultado.id = "resultado";


    div.appendChild(labelMin);
    div.appendChild(inputMin);

    div.appendChild(br);

    div.appendChild(labelMax);
    div.appendChild(inputMax);

    div.appendChild(br2);

    div.appendChild(btnContar);

    div.appendChild(divResultado);

    document.body.appendChild(div);


    // Script
    function principal() {
        let valMin = document.querySelector("#min");
        let valMax = document.querySelector("#max");
        let resultado = document.querySelector("#resultado");

        let qtdMultiplos = 0;

        if (valMin.value >= valMax.value) {
            alert("O valor máximo precisa ser maior que o mínimo");
        } else {
            if (valMin.value == '') {
                alert("O valor mínimo não pode estar em branco");
            } else {
                for (let i = valMin.value; i <= valMax.value; i++) {
                    if (i%2 == 0 && i%3 == 0) {
                        qtdMultiplos++;
                    }
                }
                resultado.innerHTML = `<p>Existem ${qtdMultiplos} entre ${valMin.value} e ${valMax.value}</p>`
                console.log("COMPONENTE 01 - Multiplos: " + qtdMultiplos);
            }
        }
    }
    btnContar.addEventListener('click', () => {
        principal();
    })

}
