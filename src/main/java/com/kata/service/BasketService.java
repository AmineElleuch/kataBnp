package com.kata.service;

import com.kata.domain.Basket;
import com.kata.domain.Product;

public interface BasketService {

	Basket addProduct(Product product);
}
