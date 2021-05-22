package com.tdapp.reactspringapp.Repositories;

import com.tdapp.reactspringapp.Entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Query(name="SELECT u FROM user u WHERE u.email = ?1", nativeQuery = true)
    User findByEmail(String email);



}
