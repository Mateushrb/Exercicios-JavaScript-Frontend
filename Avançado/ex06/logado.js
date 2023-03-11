const user = document.querySelector("#user");
user.innerHTML = `Usuário: ${localStorage.getItem("usuarioLogado")}`;

const sair = document.querySelector("#sair");

sair.addEventListener("click", () => {
    window.history.back();
});