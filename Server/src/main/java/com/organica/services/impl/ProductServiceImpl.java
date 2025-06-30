package com.organica.services.impl;

import com.organica.entities.Product;
import com.organica.payload.PageDto;
import com.organica.payload.ProductDto;
import com.organica.repositories.ProductRepo;
import com.organica.services.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private ProductRepo productRepo;



    //Create
    @Override
    public ProductDto CreateProduct(ProductDto productDto) {
        Product product=this.modelMapper.map(productDto,Product.class);
        product.setImg(product.getImg());

        Product save = this.productRepo.save(product);
        save.setImg(null);
        return this.modelMapper.map(save,ProductDto.class);
    }

    //Read One
    @Override
    public ProductDto ReadProduct(Integer ProductId) {

        Product product = this.productRepo.findById(ProductId).orElseThrow();
        ProductDto productDto = new ProductDto(product.getProductId(),product.getProductName(),product.getDescription(),product.getPrice(),product.getWeight(),product.getImg(),product.getCategorie().getName());
        return productDto;

    }

    @Override
    public List<ProductDto> ReadProductByCategorie(String categorieName) {
        List<Product> all = this.productRepo.findByCategorieName(categorieName);
        List<ProductDto> collect = all.stream().map(dto -> new ProductDto(dto.getProductId(), dto.getProductName(), dto.getDescription(), dto.getPrice(), dto.getWeight(), dto.getImg(),categorieName)).collect(Collectors.toList());

        return collect;
    }


    //Read All
    @Override
    public PageDto ReadAllProduct(PageRequest pageableRequest) {
        Page<Product> page = this.productRepo.findAll(pageableRequest);
        PageDto pageDto = new PageDto();
        List<ProductDto> collect = page.stream().map(dto -> new ProductDto(dto.getProductId(), dto.getProductName(), dto.getDescription(), dto.getPrice(), dto.getWeight(), dto.getImg(),null)).collect(Collectors.toList());
        pageDto.setListProduct(collect);
        pageDto.setSize(page.getSize());
        pageDto.setTotalPages(page.getTotalPages());
        pageDto.setTotalElements(page.getTotalElements());
        pageDto.setNumber(page.getNumber());
        return pageDto;
    }

    //Delete
    @Override
    public void DeleteProduct(Integer productId) {

//        Product product = this.productRepo.findById(productId).orElseThrow();
        this.productRepo.deleteById(productId);
        return;

    }


    //Update
    @Override
    public ProductDto UpdateProduct(ProductDto productDto,Integer ProductId) {

        Product newProduct = this.productRepo.findById(ProductId).orElseThrow();
        newProduct.setProductId(ProductId);
        newProduct.setDescription(productDto.getDescription());
        newProduct.setProductName(productDto.getProductName());
        newProduct.setWeight(Float.valueOf(productDto.getWeight()));
        newProduct.setPrice(Float.valueOf(productDto.getPrice()));
        newProduct.setImg(productDto.getImg());

        productRepo.save(newProduct);


        return this.modelMapper.map(newProduct,ProductDto.class);
    }





    // compress the image bytes before storing it in the database
    public static byte[] compressBytes(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {
        }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);

        return outputStream.toByteArray();
    }

    // uncompress the image bytes before returning it to the angular application
    public static byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }
}
