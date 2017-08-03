// FUNÇAO DE LOAD DA PAGINA
$(function () {

    var nome;
    var idade;
    var atividade_1;
    var atividade_2;

    nome = "Matheus Luís";
    idade = 24;

    atividade_1 = "Meu nome é " + nome + " e minha idade é " + idade + " anos. ";

    if (idade >= 18) {
        var atividade_2 = "Sua idade é " + idade + " e parabéns, vc foi obrigado a se alistar no exército";
        console.log(atividade_2);
    } else {
        var atividade_2 = "Sua idade é " + idade + " e vc é DI MENOR";
        console.log(atividade_2);
    }

    var conteudo1 = document.getElementById("conteudo1");

    document.getElementById("btnMostrar").onclick = function () { puloDoGato() };

    function puloDoGato() {
        conteudo1.innerHTML = atividade_1 + atividade_2;
        if (conteudo1.style.display === "none") {
            conteudo1.style.display = "block";
        } else {
            conteudo1.style.display = "none";

        }
    }

    var btnSalvar = document.getElementById("btnSalvar");

    btnSalvar.addEventListener("click", function () {

        nome = document.getElementById("nomeInput").value;
        idade = document.getElementById("idadeInput").value;

        var conteudo2 = document.getElementById("conteudo2");

        event.preventDefault(); //evitar refresh da pag, comportamento padrão
        conteudo2.innerHTML = nome;
    });

});