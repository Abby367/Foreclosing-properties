package com.foreclosed.home.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.foreclosed.home.model.SalesModel;
import com.foreclosed.home.service.SalesService;

@RestController
@RequestMapping("/sales")
public class SalesController {
    
    @Autowired
    private SalesService salesService;

    @GetMapping("/showAllSales")
    public List<SalesModel> getAllSales(){
        return salesService.getAllSales();
    }
}
