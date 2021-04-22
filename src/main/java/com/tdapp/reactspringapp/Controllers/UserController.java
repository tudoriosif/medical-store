package com.tdapp.reactspringapp.Controllers;

import com.tdapp.reactspringapp.DTOs.UserDTO;
import com.tdapp.reactspringapp.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/login/process")
    public String getUser(@RequestBody UserDTO userDTO) {
        UserDTO userDTOService = userService.getUser(userDTO);
        return userDTOService.getEmail() == null ? "Login failed, user don't exists" : "Login successfully";
    }

    @PostMapping("/register/process")
    public UserDTO saveUser(@RequestBody UserDTO userDTO) {
        return userService.saveUser(userDTO);
    }
}

