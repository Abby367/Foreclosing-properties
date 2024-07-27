package com.foreclosed.home.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foreclosed.home.dao.SalesDao;
import com.foreclosed.home.model.SalesModel;

@Service
@Transactional
public class SalesService {

    private final SalesDao salesDao;

    @Autowired
    public SalesService(SalesDao salesDao) {
        this.salesDao = salesDao;
    }

    public List<Map<String, Object>> getAllSales() {
        List<SalesModel> sales = salesDao.getAllSales();
        List<Map<String, Object>> filteredSales = sales.stream()
            .map(sale -> {
                Map<String, Object> saleMap = new HashMap<>();
                saleMap.put("home_sale_id", sale.getHome_sale_id());
                saleMap.put("sale_type", sale.getSale_type());
                saleMap.put("sale_details", sale.getSale_details());
                return saleMap;
            })
            .collect(Collectors.toList());

        return filteredSales;
    }
}
