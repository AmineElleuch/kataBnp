package com.kata.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kata.domain.Basket;
import com.kata.domain.Product;
import com.kata.model.ClientModel;
import com.kata.service.BasketService;

@Service
public class BasketServiceImpl implements BasketService{

	@Autowired
	private ClientModel clientModel;
	
	@Override
	public Basket addProduct(Product product) {
		List<Product> products = clientModel.getClientBasket().getProducts();
		products.add(product);
		clientModel.getClientBasket().setProducts(products);
		clientModel.getClientBasket().setPrice(product.getPrice() + clientModel.getClientBasket().getPrice());
		return clientModel.getClientBasket();
	}
}
