
//Função que valida os dados de cadastro de contato
export function validarContato(event){
    
    //VALIDAÇÕES
    event.preventDefault();
    const form = event.target;
    let ok = true;

    //Validando o tipo do contato
    const tipo = form.querySelector('#tipo').value;
    if (tipo.length > 50) {
        alert('O campo "Tipo" deve ter no máximo 50 caracteres.');
        ok = false;
        return ok;
    }

    //Validando o campo valor
    const valor = form.querySelector('#valor').value;
    if(valor.length > 100){
        alert('O campo "Valor" deve ter no máximo 100 caracteres.');
        ok = false;
        return ok;
    }

    //Validando a observação
    const cpf = form.querySelector('#obs').value;
    if(cpf.length > 255){
        alert('O campo "Observação" deve ter no máximo 255 caracteres.');
        ok = false;
        return ok;
    }

    return ok;
}


