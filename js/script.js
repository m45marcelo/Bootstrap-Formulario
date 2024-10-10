// Captura o input nome no html
let nome = document.getElementById('floatingInput');
let nomeFiltrado = '';


// filtra o valor do input nome, para receber apenas letras
nome.oninput = () =>{
    nomeFiltrado = nome.value.replace(/\d+/g,'');
    nome.value = nomeFiltrado;
}

// Cria uma validação para os inputs
document.getElementById('btn-cadastro').addEventListener('click', function(e){
    // previne o carregamento da pagina
    e.preventDefault();
    //captura os valores de input do email e telefone na pagina
    let email = document.getElementById('floatingEmail');
    let emailValue = email.value;
    let telefone = document.getElementById('floatingTelefone');
    let telefoneValue = telefone.value

    //valida o input nome e exibe mensagem de erro caso o input esteja vazio
    if(nomeFiltrado.trim() ===''){
        document.getElementById('required-nome').innerHTML = "Por favor insira um nome valido";
        nome.classList.add('is-invalid');
    } else {
        document.getElementById('required-nome').innerHTML = "";
        nome.classList.remove('is-invalid');
    }
     //valida o input email e exibe mensagem de erro caso o input esteja vazio
    if(emailValue.trim() === ''){
        document.getElementById('required-email').innerHTML = 'Por favor insira um email valido';
        email.classList.add('is-invalid');
    } else{
        document.getElementById('required-email').innerHTML = '';
        email.classList.remove('is-invalid');
    }
     //valida o input telefone e exibe mensagem de erro caso o input esteja vazio
    if(telefoneValue.trim() === '' || telefoneValue.length < 14){
        document.getElementById('required-telefone').innerHTML = 'Por favor insira um telefone valido';
        telefone.classList.add('is-invalid');
    } else{
        document.getElementById('required-telefone').innerHTML = '';
        telefone.classList.remove('is-invalid')
    }
})