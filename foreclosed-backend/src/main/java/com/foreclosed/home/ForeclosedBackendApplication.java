package com.foreclosed.home;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@MapperScan("com.foreclosed.home.dao")
@ComponentScan("com.foreclosed.home")
@EnableTransactionManagement
public class ForeclosedBackendApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
        SpringApplication.run(ForeclosedBackendApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ForeclosedBackendApplication.class);
    }

}
