package com.foreclosed.home.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


import com.foreclosed.home.model.UserModel;

@Mapper
public interface UserDao {

    UserModel getUserByUsername(String username);

    // count the row of the table
    int countUsers();

    void deleteUserByUsername(@Param("username") String username);

    UserModel findByUsername(String username);

    void updateUser(UserModel userModel);

    UserModel getUserById(String user_id);

    Object getUserByEmail(String email);

    List<UserModel> showUserById(Long user_id);
    void insertUser(UserModel userModel);

    List<UserModel> getAllUsers();
}