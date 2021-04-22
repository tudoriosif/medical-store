package com.tdapp.reactspringapp.Repositories;

import com.tdapp.reactspringapp.Entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}
