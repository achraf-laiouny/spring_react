package com.organica.services;

import com.organica.payload.CategorieDto;
import com.organica.payload.ProductDto;

import java.util.List;

public interface CategorieService {
    //create
    CategorieDto createCategorie(CategorieDto categorieDto);

    //read
    CategorieDto getCategorie(Integer CategorieId);


    //readAll
    List<CategorieDto> getAllCategories();



}
