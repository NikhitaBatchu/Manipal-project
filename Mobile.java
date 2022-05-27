package com.example.demo.entities;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Mobile {
	@Id
	@Size(min = 2, max = 30, message="mobile id should be minimum of 2 characters and maximum of 30 characters")
	@Pattern(regexp="[0-9]+", message="mobileid should be numeric,no space allowed")
	private Integer mobileId;
	@NotBlank(message="Name can't be blank")
	private String mobileName;
	@Pattern(regexp="[0-9]+", message="mobilecost should be numeric,no space allowed")
	private Float mobileCost;
	private LocalDate mfd;
	private String modelNumber;
	private String companyName;
	private Category category;

	public Mobile() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Mobile(Integer mobileId, String mobileName, Float mobileCost, LocalDate mfd, String modelNumber,
			String companyName, Category category) {
		super();
		this.mobileId = mobileId;
		this.mobileName = mobileName;
		this.mobileCost = mobileCost;
		this.mfd = mfd;
		this.modelNumber = modelNumber;
		this.companyName = companyName;
		this.category = category;
	}

	public Integer getMobileId() {
		return mobileId;
	}

	public void setMobileId(Integer mobileId) {
		this.mobileId = mobileId;
	}

	public String getMobileName() {
		return mobileName;
	}

	public void setMobileName(String mobileName) {
		this.mobileName = mobileName;
	}

	public Float getMobileCost() {
		return mobileCost;
	}

	public void setMobileCost(Float mobileCost) {
		this.mobileCost = mobileCost;
	}

	public LocalDate getMfd() {
		return mfd;
	}

	public void setMfd(LocalDate mfd) {
		this.mfd = mfd;
	}

	public String getModelNumber() {
		return modelNumber;
	}

	public void setModelNumber(String modelNumber) {
		this.modelNumber = modelNumber;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}
}
