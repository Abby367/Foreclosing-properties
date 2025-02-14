package com.foreclosed.home.model;
import java.time.LocalDateTime;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserModel {

    private String user_id;

    private Long user_gross_id;

    private Long  user_type_id;

    private List <Long> user_bid_id;

    private List<Long> home_id;

    private String first_name;

    private String last_name;

    private String name;

    private String user_city;

    private String user_street;

    private String user_lot_block;

    private String user_subdivision;

    private String occupation;

    private String email;

    private Long mobile_num;

    private String username;

    private String password;

    private String oldPassword;
   
    private int del_flag;

    private LocalDateTime reg_time;

    private String reg_id;

    private LocalDateTime updated_time;

    private String updated_by;

    // For joint table
    private String user_bid_amount;
    private String usertype_name;
    private String user_gross_income;
   
}