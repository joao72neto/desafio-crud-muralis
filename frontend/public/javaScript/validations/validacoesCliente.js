
//Mascaras para o cadastro de cliente
export function mascarasCliente(){

    //CPF
    const cpf = document.querySelector('#cpf');

    if (cpf) {
        Inputmask("999.999.999-99").mask(cpf);
    }
}

//Função que valida os dados de cadastro de cliente
export function validarCliente(event){
    
    //VALIDAÇÕES
    event.preventDefault();
    const form = event.target;
    let ok = true;

    //Pattern que aceita apenas letras e espaços
    const textoApenas = /^[A-Za-zÀ-ÖØ-öø-ÿ\s.]+$/;


    //Validando o nome do usuário
    const nome = form.querySelector('#nome').value;
    if(!textoApenas.test(nome)){
        alert('O campo "Nome" não pode conter valores numéricos');
        ok = false;
        return ok;
    }

    if (nome.length < 3 || nome.length > 100) {
        alert('O campo "Nome" deve ter entre 10 e 100 caracteres.');
        ok = false;
        return ok;
    }

    //Validando o endereço do usuário
    const endereco = form.querySelector('#endereco').value;
    if(endereco.length > 255){
        alert('O endereço deve ter no máximo 255 caracteres');
        ok = false;
        return ok;
    }

    //Validando o CPF
    const cpf = form.querySelector('#cpf').value;
    const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if(!cpfPattern.test(cpf)){
        alert('O CPF deve estar no formato XXX.XXX.XXX-XX');
        ok = false;
        return ok;
    }

    // Validando a data
    const dataNascimento = form.querySelector('#data').value;
    const dataNascimentoObj = new Date(dataNascimento);
    const dataAtual = new Date();

    if (dataNascimentoObj > dataAtual) {
        alert('A data de nascimento não pode estar no futuro.');
        ok = false;
        return ok;
    }

    return ok;
}


