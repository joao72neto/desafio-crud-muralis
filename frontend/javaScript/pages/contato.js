//Msg personalizada caso não haja contatos
const contato = document.querySelector('.all-contatos').innerHTML;

console.log(contato);

if(contato.textContent === ''){
    document.querySelector('h2').textContent = 'Nenhum contato cadastrado';
}
