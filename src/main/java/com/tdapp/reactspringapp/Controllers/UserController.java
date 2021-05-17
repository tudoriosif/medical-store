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
    public UserDTO getUser(@RequestBody UserDTO userDTO) {
        UserDTO userDTOService = userService.getUser(userDTO);

        return userDTOService;
    }

    @GetMapping("/login/process/{email}")
    public UserDTO getUserByEmail(@PathVariable("email") String email){
        UserDTO userDTOService = userService.getUserByEmail(email);

        return userDTOService;
    }

    @PostMapping("/register/process")
    public UserDTO saveUser(@RequestBody UserDTO userDTO) {
        return userService.saveUser(userDTO);
    }
}

