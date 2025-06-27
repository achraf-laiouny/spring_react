package com.organica.repositories;

import com.organica.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepo extends JpaRepository<Product,Integer> {
//    List<Product> findByCategorie(String categorie);
}
