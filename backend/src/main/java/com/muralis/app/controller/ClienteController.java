package com.muralis.app.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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

import jakarta.validation.Valid;

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
    public ResponseEntity<?> cadastrarClienteController(
        @Valid @RequestBody Cliente cliente,
        BindingResult result
    ){
        //Verificando os erros
        if (result.hasErrors()) {
            
            //Retornando todos os erros de validação
            List<String> erros = result.getAllErrors().stream()
                .map(error -> error.getDefaultMessage())
                .collect(Collectors.toList());
            
            return ResponseEntity.badRequest().body(erros);

        }

        return new ResponseEntity<>(clienteService.cadastrarClienteService(cliente), HttpStatus.CREATED);
    }

    //Deletando um cliente por id
    @DeleteMapping("/delete/{clt_id}")
    public ResponseEntity<Void> deletarClienteController(
        @PathVariable Integer clt_id
    ){
        
        if(clienteService.buscarClienteIdService(clt_id).isEmpty()){
            return ResponseEntity.notFound().build();
        }

        clienteService.deletarClienteIdService(clt_id);

        return ResponseEntity.noContent().build();
    }

    //Atualizando um cliente 
    @PutMapping("/update")
    public ResponseEntity<?> atualizarClienteController(
        @Valid @RequestBody Cliente cliente,
        BindingResult result
    ){

        //Verificando os erros
        if (result.hasErrors()) {
            
            List<String> erros = result.getAllErrors().stream()
                .map(error -> error.getDefaultMessage())
                .collect(Collectors.toList());

            return ResponseEntity.badRequest().body(erros);
            
        }

        if(clienteService.buscarClienteIdService(cliente.getClt_id()).isEmpty()){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(clienteService.atualizarService(cliente));
    }
}
