//Consultar 
export async function buscarClienteIdService(clt_id){

    try{
        
        let res = await fetch(`http://localhost:8080/clientes/${clt_id}`); 
        
        if(res.ok){
            const cliente = await res.json();
            return cliente;
        }

        return res;

    }catch(err){
        console.error(`Erro cadastrarService - service: ${err}`);
    }
}

//Cadastro
export async function cadastrarService(dados) {
    try{
        const res = await fetch('http://localhost:8080/clientes/add',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(dados)
        });
    
        if(res.ok){
            return res;
        }
    
        return res;
    
    }catch(err){
        console.error(`Erro cadastrarService - service: ${err}`);
    }  
}


//Edição
export async function editarService(dados){
    try{
        const res = await fetch('http://localhost:8080/clientes/update',{
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(dados)
        });

        if(res.ok){
            return res;
        }

        return res;

    }catch(err){
        console.error(`Erro editarService - service: ${err}`);
    }  
}

//Exclusão
export async function deletarService(clt_id) {
    try{
        const res =  await fetch(`http://localhost:8080/clientes/delete/${clt_id}`, {method: 'DELETE'});
    
        if(res.ok){
            return res; 
        }

        return res;
        
    }catch(err){
        console.error(`Erro deletarService - service: ${err}`);
    }
}

