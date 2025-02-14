package com.foreclosed.home.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foreclosed.home.service.SalesService;

@RestController
@RequestMapping("/sales")

public class SalesController {

    private final SalesService salesService;

    @Autowired
    public SalesController(SalesService salesService) {
        this.salesService = salesService;
    }

    @GetMapping("/showAllSales")
    public ResponseEntity<List<Map<String, Object>>> allSales() {
        List<Map<String, Object>> sales = salesService.getAllSales();
        return ResponseEntity.ok(sales);
    }
}
