package com.muralis.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.muralis.app.entity.Cliente;
import com.muralis.app.service.ClienteService;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    
    @Autowired
    private ClienteService clienteService;

    //Mostrando e filtrando todos os clientes
    @GetMapping
    public ResponseEntity<List<Cliente>> filtrarClientesNomeCpfController(
        @RequestParam(required = false) String clt_nome, 
        @RequestParam(required = false) String clt_cpf
     
    ){
        return ResponseEntity.ok(
            clienteService.filtrarClientesNomeCpfService(clt_nome, clt_cpf)
        );
    }

    //Cadastrando um cliente no banco
    @PostMapping("/add")
    public ResponseEntity<Cliente> cadastrarController(
        @RequestBody Cliente cliente
    ){
        return new ResponseEntity<>(clienteService.cadastrarClienteService(cliente), HttpStatus.CREATED);
    }

    //Deletando um cliente por id
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletarController(
        @PathVariable Integer clt_id
    ){
        clienteService.deletarClienteIdService(clt_id);

        if(clienteService.buscarClienteIdService(clt_id).isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.noContent().build();
    }

    //Atualizando um cliente 
    @PutMapping("/update")
    public ResponseEntity<Cliente> atualizarController(
        @RequestBody Cliente cliente
    ){

        if(clienteService.buscarClienteIdService(cliente.getClt_id()).isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(clienteService.atualizarService(cliente));
    }
}
