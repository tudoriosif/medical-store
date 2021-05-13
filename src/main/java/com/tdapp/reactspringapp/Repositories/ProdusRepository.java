package com.tdapp.reactspringapp.Repositories;

import com.tdapp.reactspringapp.Entities.Produs;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdusRepository extends CrudRepository<Produs, Long> {
}
