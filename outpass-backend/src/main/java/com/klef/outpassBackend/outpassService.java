package com.klef.outpassBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.*;

@Service
@CrossOrigin(origins="*")
public class outpassService {

	
	@Autowired
	private Repository repo;
	
	//create outpass 
	public Model createOutpass(Model model) {
		return repo.save(model);
	}
	
	public List<Model> getAll(){
		return repo.findAll();
	}
	
}
