package com.klef.outpassBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class OutpassBackendApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(OutpassBackendApplication.class, args);
		System.out.println("backend is running");
	}

}
