package com.kata.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kata.datasource.StaticDataSource;
import com.kata.domain.Product;

@RestController
@RequestMapping("/product")
public class ProductController {
	
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public List<Product> getAllProducts() {
		return StaticDataSource.products;
	}
}
