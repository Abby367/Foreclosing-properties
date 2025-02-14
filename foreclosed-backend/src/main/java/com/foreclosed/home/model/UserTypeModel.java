package com.foreclosed.home.model;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserTypeModel {
    private Long user_type_id;
    private String user_type;
    private String sale_details;
    private int is_delete;
    private LocalDateTime created_time;
    private Long created_by;
    private LocalDateTime  updated_time;
    private Long updated_by;

}
