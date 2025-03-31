package com.muralis.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.muralis.app.entity.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {


    // Buscar por nome ou CPF usando @Query
    @Query("""
        SELECT 
            c 
        FROM 
            Cliente c 
        WHERE 
            (:clt_cpf IS NULL OR c.clt_cpf = :clt_cpf) 
        AND 
            (:clt_nome IS NULL OR LOWER(c.clt_nome) LIKE LOWER(CONCAT('%', :clt_nome, '%')))"""
    )

    List<Cliente> findByNomeOrCpf(@Param("clt_nome") String nome, @Param("clt_cpf") String cpf);

}