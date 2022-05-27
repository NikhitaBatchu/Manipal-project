package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Mobile;
import com.example.demo.exception.MobileException;
import com.example.demo.service.IMobileService;

//@CrossOrigin(value="http://localhost:3000/")
@RestController
@RequestMapping("api")

public class MobileController {

	@Autowired
	private IMobileService mobiService;

	@GetMapping("mobiles")
	public List<Mobile> getAllMobiles() {
		return this.mobiService.showAllMobile();
	}

	@PostMapping("addMobile")
	public Mobile addMobile(@RequestBody Mobile mobile) throws MobileException {
		return this.mobiService.addMobile(mobile);
	}

	@DeleteMapping("deleteMobile/{id}")
	public String deleteMobile(@PathVariable("id") Integer mobileId) throws MobileException {
		return this.mobiService.deleteMobile(mobileId);
	}

	@PutMapping("updateMobile")
	public Mobile updateMobile(@RequestBody Mobile mobile) throws MobileException {
		return this.mobiService.updateMobile(mobile);
	}

	@GetMapping("mobile/{id}")
	public Mobile showMobileById(@PathVariable("id") Integer mobileId) throws MobileException {
		return this.mobiService.showMobileById(mobileId);
	}

}
