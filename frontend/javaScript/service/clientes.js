//Carregando todos os usuários do banco
document.addEventListener('DOMContentLoaded', () => {
    fetchClientes();
    filtro();
});


//Adicionando funcionamendo do filtro
function filtro(){
    document.querySelector('#btn-filtro').addEventListener('click', async (event) => {
        
        event.preventDefault();

        //Obetndo os dados
        const nome = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
    
        //Montando a url
        let url = '/clientes?';
        if (nome) url += `clt_nome=${encodeURIComponent(nome)}&`;
        if (cpf) url += `clt_cpf=${encodeURIComponent(cpf)}&`;
    
        url = url.slice(0, -1);

        await fetchClientes(url);
    
    });
}

async function fetchClientes(url='/clientes') {
    try {
       
        let response = await fetch(`http://localhost:8080${url}`); 
        const clientes = await response.json();

        //Obtendo o container
        const container = document.querySelector('.all-clientes');
        container.innerHTML = '';

        clientes.forEach(cliente => {

            const clienteDiv = document.createElement('div');
            clienteDiv.classList.add('wrapper');
            clienteDiv.innerHTML = `
                <div class="cliente">
                    <p class="invisible cliente-id">${cliente.clt_id}</p>
                    <p>${cliente.clt_nome}</p>
                    <p>${cliente.clt_cpf}</p>
                </div>
                <div class="acoes">
                    <a class="cont">Contatos</a>
                    <a class="edit">Editar</a>
                    <a class="excl">Excluir</a>
                </div>
            `;

            container.appendChild(clienteDiv);
        });
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
    }
}


//Excluindo um cliente e seus contatos
document.querySelector('.container-index').addEventListener('click', async function(event) {
    
    if(event.target.classList.contains('excl')){

        let resposta = confirm('Deseja realmente excluir o usuário?');

        if(!resposta){
            return;
        }

        // Encontrar o cliente mais próximo e pegar o ID correto
        const clienteElement = event.target.closest('.wrapper');
        const clt_id = clienteElement.querySelector('.cliente-id').textContent;


        //Deletando o cliente
        try{
            const res =  await fetch(`http://localhost:8080/clientes/delete/${clt_id}`, {method: 'DELETE'});

            if(res.ok){
                window.location.reload();
            }
            
        }catch(err){
            console.log(`Erro ${err}`);
        }
    }
});
