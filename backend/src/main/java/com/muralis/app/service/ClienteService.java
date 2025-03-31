package com.muralis.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.muralis.app.entity.Cliente;
import com.muralis.app.repository.ClienteRepository;

public class ClienteService {
    

    @Autowired
    private ClienteRepository clienteRepository;


    //Listando todos os clientes do banco de dados
    public List<Cliente> buscarTodosClientesService(){
        return clienteRepository.findAll();
    }

    //Buscando cliente por id
    public Optional<Cliente> buscarClienteIdService(Integer clt_id){
        return clienteRepository.findById(clt_id);
    }

    //Inserindo cliente no banco 
    public Cliente cadastrarClienteService(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    //Deletando um cliente
    public void deletarClienteIdService(Integer clt_id){
        clienteRepository.deleteById(clt_id);
    }

    //Atualizando um cliente
    public Cliente atualizarService(Cliente cliente){

        Cliente cliente_atualizado = clienteRepository.findById(cliente.getClt_id()).get();
        cliente_atualizado = cliente;

        return clienteRepository.save(cliente_atualizado);
    }
}
