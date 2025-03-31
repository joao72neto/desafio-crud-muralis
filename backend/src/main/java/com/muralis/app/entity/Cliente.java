package com.muralis.app.entity;

import java.time.LocalDate;
import java.util.List;


import jakarta.persistence.*;
import lombok.Data;


@Data
@Entity
public class Cliente {


    //Criando a entidade Cliente no banco
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer clt_id;

    @Column(length = 100, nullable = false)
    private String clt_nome;

    @Column(length = 14, nullable = false)
    private String clt_cpf;

    @Column
    private LocalDate clt_data_nasc;

    @Column(length = 255)
    private String clt_endereco;

    //Fazendo uma lista para armazenar os cotatos
    @OneToMany(mappedBy = "cliente")
    private List<Contato> contatos;

}