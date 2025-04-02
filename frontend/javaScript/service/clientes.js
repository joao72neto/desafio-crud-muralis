document.addEventListener('DOMContentLoaded', () => {
    fetchClientes();
});

async function fetchClientes() {
    try {
        const response = await fetch('http://localhost:3000/clientes'); 
        const clientes = await response.json();

        const wrapper = document.querySelector('.wrapper'); 
        wrapper.innerHTML = ''; 

        clientes.forEach(cliente => {
            const divCliente = document.createElement('div');
            divCliente.classList.add('cliente');
            divCliente.innerHTML = `
                <p class="invisible cliente-id">${cliente.id}</p>
                <p>${cliente.nome}</p>
                <p>${cliente.email}</p>
            `;

            const divAcoes = document.createElement('div');
            divAcoes.classList.add('acoes');
            divAcoes.innerHTML = `
                <a class="cont">Contatos</a>
                <a class="edit">Editar</a>
                <a class="excl">Excluir</a>
            `;

            wrapper.appendChild(divCliente);
            wrapper.appendChild(divAcoes);
        });
    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
    }
}
