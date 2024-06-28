package com.foreclosed.home.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.foreclosed.home.dao.SalesDao;
import com.foreclosed.home.model.SalesModel;


@Service
@Transactional
public class SalesService {

    public SalesDao salesDao;

    public SalesService(@Autowired(required=true) SalesDao salesDao){
        this.salesDao = salesDao;
    }

    public List<SalesModel> getAllSales(){
        return salesDao.getAllSales();
    }
}
