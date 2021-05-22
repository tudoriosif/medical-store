package com.tdapp.reactspringapp.Services;

import com.tdapp.reactspringapp.DTOs.UserDTO;
import com.tdapp.reactspringapp.Entities.User;
import com.tdapp.reactspringapp.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public UserDTO getUser(UserDTO userDTOFront){
        List<User> users =  (List<User>) userRepository.findAll();
        UserDTO userDTO = new UserDTO();
        for (User user : users) {
            if(userDTOFront.getEmail().equals(user.getEmail())){
                userDTO.setId(user.getId());
                userDTO.setEmail(user.getEmail());
                userDTO.setPassword(user.getPassword());
                userDTO.setUsername(user.getUsername());
            }

        }
        System.out.println(userDTO);
        return userDTO;
    }

    public UserDTO saveUser(UserDTO userDTO) {
        List<User> users =  (List<User>) userRepository.findAll();
        for(User user : users) {
            if(user.getEmail().equals(userDTO.getEmail())){
                // Daca exista deja, nu mai facem operatia de save
                UserDTO userDTO1 = new UserDTO();
                userDTO1.setId(user.getId());
                userDTO1.setEmail(user.getEmail());
                userDTO1.setPassword(user.getPassword());
                userDTO1.setUsername(user.getUsername());
                return userDTO1;

            }
        }
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setUsername(userDTO.getUsername());
        user.setPassword(userDTO.getPassword());

        UserDTO userDTO1 = new UserDTO();

        User savedUser = userRepository.save(user);

        userDTO1.setId(savedUser.getId());
        userDTO1.setEmail(savedUser.getEmail());
        userDTO1.setPassword(savedUser.getPassword());
        userDTO1.setUsername(savedUser.getUsername());

        return userDTO1;
    }

    public UserDTO getUserByEmail(String email) {
        User user = userRepository.findByEmail(email);

        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setEmail(user.getEmail());
        userDTO.setPassword(user.getPassword());
        userDTO.setUsername(user.getUsername());
        return userDTO;
    }
}