//Msg personalizada caso não haja contatos
const contato = document.querySelector('.contato-wrapper');

if(!contato){
    document.querySelector('h2').textContent = 'Nenhum contato cadastrado';
}
