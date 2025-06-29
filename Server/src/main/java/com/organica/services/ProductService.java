package com.organica.services;

import com.organica.payload.PageDto;
import com.organica.payload.ProductDto;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface ProductService {

    //create
    ProductDto CreateProduct(ProductDto productDto);

    //read
    ProductDto ReadProduct(Integer ProductId);

    List<ProductDto> ReadProductByCategorie(String categorieName);

    //readAll
    PageDto ReadAllProduct(PageRequest pageRequest);


    //delete
    void DeleteProduct(Integer productId);


    //update
    ProductDto UpdateProduct(ProductDto productDto,Integer ProductId);



}

