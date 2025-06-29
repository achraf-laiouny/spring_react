package com.organica.services.impl;

import com.organica.entities.Categorie;
import com.organica.payload.CategorieDto;
import com.organica.payload.ProductDto;
import com.organica.repositories.CategorieRepo;
import com.organica.services.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class CategorieServiceImpl implements CategorieService {
    @Autowired
    private CategorieRepo categorieRepo;
    @Override
    public CategorieDto createCategorie(CategorieDto categorieDto) {
        return null;
    }

    @Override
    public CategorieDto getCategorie(Integer CategorieId) {
        return null;
    }

    @Override
    public List<CategorieDto> getAllCategories() {
       List<Categorie> listcat = categorieRepo.findAll();
        List<CategorieDto> collect = listcat.stream().map(dto -> new CategorieDto(dto.getId(), dto.getName(), dto.getDescription(), dto.getImage(), dto.getActiveImage())).collect(Collectors.toList());

        return collect;
    }
}
