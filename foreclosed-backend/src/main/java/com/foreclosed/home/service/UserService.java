package com.foreclosed.home.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.foreclosed.home.dao.UserDao;
import com.foreclosed.home.model.UserModel;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.stream.Collectors;
@Service
@Transactional
public class UserService {
    private final UserDao userDao;

    @Autowired
    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public UserModel getUserByUsername(String username) {
        return userDao.getUserByUsername(username);
    }

    public Object getUserByEmail(String email) {
        return userDao.getUserByEmail(email);
    }

    public void insertUser(UserModel userModel) {
        userDao.insertUser(userModel);
    }

    public void updateUser(UserModel userModel) {
        userDao.updateUser(userModel);
    }

    public void deleteUserByUsername(String username) {
        userDao.deleteUserByUsername(username);
    }

    public UserModel getUserById(String userId) {
        return userDao.getUserById(userId);
    }

    public List<Map<String, Object>> showUserById(Long userId) {
        List<UserModel> users = userDao.showUserById(userId);
        return users.stream()
            .map(user -> {
                Map<String, Object> userMap = new HashMap<>();
                userMap.put("user_id", user.getUser_id());
                userMap.put("username", user.getUsername());
                userMap.put("email", user.getEmail());
                // Don't include password in the map for security
                return userMap;
            })
            .collect(Collectors.toList());
    }

    public int countUsers() {
        return userDao.countUsers();
    }

    public UserModel authenticateUser(UserModel userModel, String password) {
        UserModel user = getUserByUsername(userModel.getUsername());
        if (user != null && password.equals(user.getPassword())) {
            return user;
        }
        return null;
    }

    // Helper method to check if user exists by email
    public boolean existsByEmail(String email) {
        return getUserByEmail(email) != null;
    }

    // Helper method to check if user exists by username
    public boolean existsByUsername(String username) {
        return getUserByUsername(username) != null;
    }
    
    public void updatePassword(String username, String newPassword) {
        UserModel user = getUserByUsername(username);
        if (user != null) {
            user.setPassword(newPassword);
            updateUser(user);
        }
    }

    public void updateEmail(String username, String newEmail) {
        UserModel user = getUserByUsername(username);
        if (user != null) {
            user.setEmail(newEmail);
            updateUser(user);
        }
    }
    public List<UserModel> getAllUsers() {
        return userDao.getAllUsers();
    }
}
