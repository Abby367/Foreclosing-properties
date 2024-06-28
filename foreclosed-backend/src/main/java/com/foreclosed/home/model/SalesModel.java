package com.foreclosed.home.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SalesModel {
    private Long home_sale_id;
    private String sale_type;
    private String sale_details;
}
