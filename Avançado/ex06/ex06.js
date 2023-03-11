export function q6() {
    let div = document.createElement("div");
    div.id = "q6";

    /// Campos ///
    let usuarioLabel = document.createElement("label");
    let usuarioLabelText = document.createTextNode("Usuário: ");
    usuarioLabel.appendChild(usuarioLabelText);

    let usuarioBox = document.createElement("input");
    usuarioBox.id = "usuarioBox";

    let senhaLabel = document.createElement("label");
    let senhaLabelText = document.createTextNode("Senha: ");
    senhaLabel.appendChild(senhaLabelText);

    let senhaBox = document.createElement("input");
    senhaBox.setAttribute("type", "password");
    senhaBox.id = "senhaBox";
    /// Campos ///

    /// Botões ///
    let showPassword = document.createElement("input");
    showPassword.setAttribute("type", "button");
    showPassword.setAttribute("value", "Mostrar senha");
    showPassword.id = "showPassword";

    let signUp = document.createElement("input");
    signUp.setAttribute("type", "button");
    signUp.setAttribute("value", "Sign Up");
    signUp.id = "signUp";

    let signIn = document.createElement("input");
    signIn.setAttribute("type", "button");
    signIn.setAttribute("value", "Sign In");
    signIn.id = "signIn";
    /// Botões ///

    // Quebra de linha
    let br1 = document.createElement("br");
    let br2 = document.createElement("br");


    div.appendChild(usuarioLabel);
    div.appendChild(usuarioBox);
    div.appendChild(br1);
    div.appendChild(senhaLabel);
    div.appendChild(senhaBox);
    div.appendChild(showPassword);
    div.appendChild(br2);
    div.appendChild(signUp);
    div.appendChild(signIn);

    document.body.appendChild(div);



    /// Script ///
    localStorage.setItem("usuarioLogado", "usuarioQualquer");

    const visibilidadeSenha = document.querySelector("#showPassword");
    const criarConta = document.querySelector("#signUp");
    const logar = document.querySelector("#signIn");

    const user = document.querySelector("#usuarioBox");
    const pass = document.querySelector("#senhaBox");

    let senhaBoolean = 0;
    visibilidadeSenha.addEventListener("click", () => {
        if (senhaBoolean == 0) {
            senhaBox.setAttribute("type", "text");
            showPassword.setAttribute("value", "Ocultar senha");
            senhaBoolean = 1;
        } else if (senhaBoolean == 1) {
            senhaBox.setAttribute("type", "password");
            showPassword.setAttribute("value", "Mostrar senha");
            senhaBoolean = 0;
        }
    });

    criarConta.addEventListener("click", () => {
        if ((user.value).length < 3) {
            alert("Campo usuário deve ter mais de 3 digitos!");
        } else if ((pass.value).length < 3) {
            alert("Campo senha deve ter mais de 3 digitos!");
        } else {
            localStorage.setItem(user.value, pass.value)
            user.value = '';
            pass.value = '';
            alert("Usuário criado com sucesso!");
        }

    });

    logar.addEventListener("click", () => {
        if (localStorage.getItem(user.value) == pass.value) {
            localStorage.setItem("usuarioLogado", user.value);
            user.value = '';
            pass.value = '';
            window.location.href = "./ex06/logado.html";
        } else {
            window.alert("Usuário ou senha incorreto(a)!");
        }
    });
}