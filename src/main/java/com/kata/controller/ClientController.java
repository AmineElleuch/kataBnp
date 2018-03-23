package com.kata.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kata.domain.Client;
import com.kata.model.ClientModel;

@RestController
@RequestMapping("/client")
public class ClientController {
	@Autowired
	private ClientModel clientModel;

	@RequestMapping(value = "/currentClient", method = RequestMethod.GET)
	public Client getCurrentClient() {
		return clientModel.getCurrentClient();
	}
}
