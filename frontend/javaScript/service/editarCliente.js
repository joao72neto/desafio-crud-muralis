document.addEventListener('DOMContentLoaded', async () => {

    //Obetendo o ID do cliente
    const urlParams = new URLSearchParams(window.location.search);
    const clt_id = urlParams.get('clt_id');


    //Chamando o cliente por id
    let response = await fetch(`http://localhost:8080/clientes/${clt_id}`); 
    const cliente = await response.json();


    //Preenchendo o forms com os dados já cadastrados
    document.querySelector('#nome').value = cliente.clt_nome;
    document.querySelector('#endereco').value = cliente.clt_endereco;
    document.querySelector('#cpf').value = cliente.clt_cpf;
    let dataFormatada = new Date(cliente.clt_data_nasc).toISOString().split('T')[0];
    document.querySelector('#data').value = dataFormatada;
});


//Função que editar um cliente já cadastrado
document.querySelector('form').addEventListener('submit', async function(event){
  
    event.preventDefault();

    //Obetendo o ID do cliente
    const urlParams = new URLSearchParams(window.location.search);
    const clt_id = urlParams.get('clt_id');

    //Chamando o cliente por id
    let response = await fetch(`http://localhost:8080/clientes/${clt_id}`); 
    const cliente = await response.json();

    //Pegando dados do formulário
    const formDados = new FormData(event.target);
    let dados = Object.fromEntries(formDados.entries());

    
    //Preparando os dados para passar para o back
    const clienteEditado = {
        clt_id: clt_id,
        clt_nome: dados.nome,
        clt_endereco: dados.endereco,
        clt_cpf: dados.cpf, 
        clt_data_nasc: dados.data,
        contatos: cliente.contatos 
    };

    try{
        const res = await fetch('http://localhost:8080/clientes/update',{
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(clienteEditado)
        });

        if(res.ok){
            alert('Cliente atualizado com sucesso!');
            return;
        }

        alert('Não foi possível atualizar o cliente');
        console.log(res);

    }catch(err){
        console.log(`Erro editarCliente - service: ${err}`);
    }   
});

