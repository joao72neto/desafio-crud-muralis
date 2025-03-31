package com.muralis.app.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Contato {

    //Criando a entidade Contato no banco
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer con_id;

    @Column(length = 50, nullable = false)
    private String con_tipo;

    @Column(length = 100, nullable = false)
    private String con_valor;

    @Column(length = 255)
    private String con_observacao;

    //Criando a chave estrangeira de cliente
    @ManyToOne
    @JoinColumn(name = "con_clt_id", nullable = false)
    private Cliente cliente;
}