package com.klef.outpassBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
@CrossOrigin(origins="*")
public class Controller {
	
	
	
	@Autowired
	private Repository repo;
	
	
	@PostMapping
	public Model createOutpass(@RequestBody Model model) {
		return repo.save(model);
	}

	
	@GetMapping("/")
	public String home() {
		return "welcome outpass backend";
				
	}
	
	@GetMapping("/all")
	public List<Model> getAll(){
		return repo.findAll();
	}
}
