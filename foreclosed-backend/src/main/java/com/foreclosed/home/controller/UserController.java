package com.foreclosed.home.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import com.foreclosed.home.model.UserModel;
import com.foreclosed.home.service.UserService;
import jakarta.servlet.http.HttpSession;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/users")

public class UserController {
    @Autowired
    private UserService userService;
    


    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody UserModel userModel) {
        try {
            // Check if username already exists
            if (userService.getUserByUsername(userModel.getUsername()) != null) {
                return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "Username already exists"));
            }
            
            // Check if email already exists
            if (userService.getUserByEmail(userModel.getEmail()) != null) {
                return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(Map.of("message", "Email already exists"));
            }

            
            // Save user
            userService.insertUser(userModel);
            
            return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of("message", "User registered successfully"));
                
        } catch (Exception e) {
            return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("message", "Error registering user: " + e.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserModel userModel, HttpSession session) {
        try {
            UserModel user = userService.getUserByUsername(userModel.getUsername());
            
            if (user == null) {
                return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid username or password"));
            }

            // Set session attributes
            session.setAttribute("userId", user.getUser_id());
            session.setAttribute("username", user.getUsername());

            // Remove password from response
            user.setPassword(null);
            
            return ResponseEntity.ok(user);

        } catch (Exception e) {
            return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("message", "Error during login: " + e.getMessage()));
        }
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> getUserProfile(@PathVariable String username) {
        try {
            UserModel user = userService.getUserByUsername(username);
            if (user == null) {
                return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "User not found"));
            }
            
            // Remove sensitive information
            user.setPassword(null);
            
            return ResponseEntity.ok(user);
            
        } catch (Exception e) {
            return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("message", "Error retrieving user profile: " + e.getMessage()));
        }
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody UserModel userModel) {
        try {
            UserModel existingUser = userService.getUserByUsername(userModel.getUsername());
            if (existingUser == null) {
                return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "User not found"));
            }

           

            userService.updateUser(userModel);
            
            return ResponseEntity.ok(Map.of("message", "User updated successfully"));
            
        } catch (Exception e) {
            return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("message", "Error updating user: " + e.getMessage()));
        }
    }
    @GetMapping("/all")
public ResponseEntity<?> getAllUsers() {
    try {
        List<UserModel> users = userService.getAllUsers();
        
        // Remove passwords before sending the response
        users.forEach(user -> user.setPassword(null));

        return ResponseEntity.ok(users);
    } catch (Exception e) {
        return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(Map.of("message", "Error retrieving users: " + e.getMessage()));
    }
}
    
}
