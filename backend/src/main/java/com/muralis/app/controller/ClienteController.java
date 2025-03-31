package com.muralis.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    
    //Retornando a página principal
    @GetMapping
    public String testeController(){
        return "Hello World!";
    }

}
