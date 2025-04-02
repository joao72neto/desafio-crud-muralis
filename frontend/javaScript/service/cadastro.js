//Função que cadastra um cliente novo
document.querySelector('form').addEventListener('submit', async function(event){
  
    event.preventDefault();

    //Pegando dados do formulário
    const formDados = new FormData(event.target);
    let dados = Object.fromEntries(formDados.entries());

    //Preparando os dados para passar para o back
    const cliente = {
        clt_nome: dados.nome,
        clt_endereco: dados.endereco,
        clt_cpf: dados.cpf, 
        clt_data_nasc: dados.data,
        contatos: []  
    };

    try{
        const res = await fetch('http://localhost:8080/clientes/add',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(cliente)
        });

        if(res.ok){
            alert('Cliente cadastrado com sucesso!');
            return;
        }

        alert('Não foi possível cadastrar o cliente');

    }catch(err){
        console.log(`Erro cadastro - service: ${err}`);
    }   
});

