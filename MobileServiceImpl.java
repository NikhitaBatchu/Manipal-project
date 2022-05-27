package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Mobile;
import com.example.demo.exception.MobileException;
import com.example.demo.repository.IMobileRepository;

@Service
public class MobileServiceImpl implements IMobileService {
	@Autowired
	private IMobileRepository mobileRepo;

	@Override
	public Mobile addMobile(Mobile mobile) throws MobileException {
		Optional<Mobile> newMobile = this.mobileRepo.findById(mobile.getMobileId());
		if (newMobile.isPresent())
			throw new MobileException("Already mobile added");
		return this.mobileRepo.save(mobile);
	}

	@Override
	public Mobile updateMobile(Mobile mobile) throws MobileException {
		return this.mobileRepo.save(mobile);
	}

	@Override
	public String deleteMobile(Integer id) throws MobileException {
		this.mobileRepo.deleteById(id);
		return "Mobile deleted successfully";
	}

	@Override
	public List<Mobile> showAllMobile() {
		return mobileRepo.findAll();
	}

	@Override
	public Mobile showMobileById(Integer mobileId) throws MobileException {
		Optional<Mobile> mobileOptional = this.mobileRepo.findById(mobileId);
		if (mobileOptional.isEmpty())
			throw new MobileException("Mobile Id doesn't exist");
		return mobileOptional.get();
	}
}
