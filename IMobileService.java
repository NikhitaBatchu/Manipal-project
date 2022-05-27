package com.example.demo.service;

import java.util.List;

import com.example.demo.entities.Mobile;
import com.example.demo.exception.MobileException;

public interface IMobileService {
	public Mobile addMobile(Mobile mobile) throws MobileException;

	public Mobile updateMobile(Mobile mobile) throws MobileException;

	public String deleteMobile(Integer id) throws MobileException;

	public List<Mobile> showAllMobile();

	public Mobile showMobileById(Integer mobileId) throws MobileException;
}
