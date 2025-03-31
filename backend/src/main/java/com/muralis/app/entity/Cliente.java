package com.muralis.app.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import lombok.Data;

@Data
@Entity
public class Cliente {

    // Criando a entidade Cliente no banco
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer clt_id;

    // Nome do cliente
    @NotBlank(message = "O nome é obrigatório")
    @Size(
            min = 3, 
            max = 100, 
            message = "O nome deve ter entre 3 e 100 caracteres"
    )
    @Pattern(
            regexp =  "^[A-Za-zÀ-ÖØ-öø-ÿ\\s.]+$",
            message = "Nome não pode conter valores numéricos"
    )
    @Column(length = 100, nullable = false)
    private String clt_nome;

    // CPF do Cliente
    @NotBlank(message = "O CPF é obrigatório")
    @Pattern(
            regexp = "^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$", 
            message = "O CPF precisa está no formato XXX.XXX.XXX-XX"
    )
    @Column(length = 14, nullable = false, unique = true)
    private String clt_cpf;


    // Data de Nascimento do Cliente
    @PastOrPresent(message = "A data de nascimento não pode estar no futuro")
    @Column
    private LocalDate clt_data_nasc;

    // Endereço do cliente
    @Size(max = 255, message = "O endereço deve ter no máximo 255 caracteres")
    @Column(length = 255)
    private String clt_endereco;

    // Lista de contatos do cliente
    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Contato> contatos;
}
