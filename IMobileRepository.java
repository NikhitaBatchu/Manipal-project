package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.entities.Mobile;

public interface IMobileRepository extends MongoRepository<Mobile, Integer> {
}
