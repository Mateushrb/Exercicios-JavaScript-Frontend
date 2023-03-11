export class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }

    get aNome() {
        return this.nome;
    }
    set aNome(x) {
        this.nome = x;
    }

    get aNota() {
        if (this.nota<10) {
            return `0${this.nota}`;
        } else {
            return this.nota;
        }
    }
    set aNota(x) {
        this.nota = x;
    }

    situacao() {
        if (this.aNota>= 60) {
            return "APROVADO";
        } else {
            return "REPROVADO";
        }
    }
}