package com.foreclosed.home.dao;


import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.foreclosed.home.model.SalesModel;

@Mapper
public interface SalesDao {

    List<SalesModel> getAllSales();

    
}