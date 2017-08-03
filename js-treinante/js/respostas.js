// função de load da pagina
$(function() {
    // console.log( "Pagina carregada!" );
  
    // atividade 1
    var nome = "André";
    var idade = 23;
    console.log("Meu nome é " + nome + " e a minha idade é " + idade);
  
    // ativiade 2
    if (idade >= 18) {
      var mensagemMaior =
        "Seu nome é <strong>" +
        nome +
        "</strong> e sua idade é <strong>" +
        idade +
        "</strong> e parabéns, você foi obrigado a se alistar no exército.";
      console.log(mensagemMaior);
    } else {
      var mensagemMenor =
        "Seu nome é <strong>" +
        nome +
        "</strong> e sua idade é <strong>" +
        idade +
        "</strong> e vc é DI MENOR";
      console.log(mensagemMenor);
    }
  
    // atividade 3
    var botao = document.getElementById("btnMostrar");
  
    botao.addEventListener("click", function() {
      var conteudo = document.getElementById("conteudo1");
      if (idade >= 18) {
        conteudo.innerHTML = "<br><p>" + mensagemMaior + "</p>";
      } else {
        conteudo.innerHTML = "<br><p>" + mensagemMenor + "</p>";
      }
    });
  
    //   atividade 4
    var botaoSalvar = document.getElementById("btnSalvar");
    var botaoLimpar = document.getElementById("btnLimpar");
    var nomeInput = document.getElementById("nomeInput");
    var idadeInput = document.getElementById("idadeInput");
  
    function limpar() {
      nomeInput.value = "";
      idadeInput.value = "";
      var conteudo = document.getElementById("conteudo2");
      conteudo.textContent = "";
    }
  
    botaoLimpar.addEventListener("click", function() {
      event.preventDefault(); // impede comportamento padrão
      limpar();
    });
  
    botaoSalvar.addEventListener("click", function() {
      event.preventDefault(); // impede comportamento padrão
  
      var nomeDinamico = nomeInput.value;
      var idadeDinamica = idadeInput.value;
      var conteudo = document.getElementById("conteudo2");
  
      conteudo.innerHTML =
        "<br><p class='flow-text'> Nome digitado no input é <strong>" +
        nomeDinamico +
        "</strong> e a idade é <strong>" +
        idadeDinamica +
        "</strong>.</p>";
    });
  });
  