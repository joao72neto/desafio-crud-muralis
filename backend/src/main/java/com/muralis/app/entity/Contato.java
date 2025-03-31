package com.muralis.app.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import lombok.Data;

@Data
@Entity
public class Contato {

    // Criando a entidade Contato no banco
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer con_id;

    //Tipo do contato 
    @NotBlank(message = "O tipo de contato é obrigatório")
    @Size(max = 50, message = "O tipo de contato deve ter no máximo 50 caracteres")
    @Column(length = 50, nullable = false)
    private String con_tipo;

    //Valor do contato 
    @NotBlank(message = "O valor do contato é obrigatório")
    @Size(max = 100, message = "O valor do contato deve ter no máximo 100 caracteres")
    @Column(length = 100, nullable = false)
    private String con_valor;

    //Observação do contato
    @Size(max = 255, message = "A observação deve ter no máximo 255 caracteres")
    @Column(length = 255)
    private String con_observacao;

    // Criando a chave estrangeira de cliente
    @ManyToOne
    @JoinColumn(name = "con_clt_id", nullable = false)
    @JsonIgnore
    private Cliente cliente;
}
