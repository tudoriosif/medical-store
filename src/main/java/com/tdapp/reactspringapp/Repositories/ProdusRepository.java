package com.tdapp.reactspringapp.Repositories;

import com.tdapp.reactspringapp.Entities.Produs;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;


@Repository
public interface ProdusRepository extends CrudRepository<Produs, Long> {
    @Transactional // Cand facem delete in JPA avem nevoie de tranzactii si sa ne asiguram ca sunt functionale
    Long deleteByNumeProdus(String numeProdus);
    // Returneaza numarul rows-urilor afectate
}
