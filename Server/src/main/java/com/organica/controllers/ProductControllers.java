package com.organica.controllers;

import com.organica.entities.Product;
import com.organica.payload.ApiResponse;
import com.organica.payload.CategorieDto;
import com.organica.payload.PageDto;
import com.organica.payload.ProductDto;
import com.organica.services.CategorieService;
import com.organica.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/product")
public class ProductControllers {

    @Autowired
    private ProductService productService;
    @Autowired
    private CategorieService categorieService;

    //Create Product

    @PostMapping(value = "/add" )
    public ResponseEntity<ProductDto> CreateProduct(@RequestParam MultiValueMap<String, String> formData, @RequestParam("img") MultipartFile file) throws IOException {
        ProductDto productDto = new ProductDto();
        productDto.setProductName(formData.getFirst("productname"));
        productDto.setDescription(formData.getFirst("description"));
        productDto.setWeight(Float.valueOf(formData.getFirst("weight")));
        productDto.setPrice(Float.valueOf(formData.getFirst("price")));
        //productDto.setImg(file.getBytes());

        ProductDto save = this.productService.CreateProduct(productDto);

        return new ResponseEntity<ProductDto>(save,HttpStatusCode.valueOf(200));
    }

    //Get by Id
    @GetMapping("/{productid}")
    public ResponseEntity<ProductDto> GetById(@PathVariable Integer productid){
        ProductDto product = this.productService.ReadProduct(productid);

        return new ResponseEntity<>(product,HttpStatusCode.valueOf(200));
    }


    //Get All Product
    @GetMapping("/")
    public ResponseEntity<PageDto> getAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size){
        PageDto pageDto = this.productService.ReadAllProduct(PageRequest.of(page, size));

        return new ResponseEntity<>(pageDto,HttpStatusCode.valueOf(200));

    }

    @GetMapping("/categories")
    public ResponseEntity<List<CategorieDto>> getAllCategories(){
        List<CategorieDto> categories = this.categorieService.getAllCategories();

        return new ResponseEntity<>(categories,HttpStatusCode.valueOf(200));
    }

    @GetMapping("/categorie/{categorie}")
    public ResponseEntity<List<ProductDto>> getProductsByCategorie(@PathVariable String categorie){
        List<ProductDto> products = this.productService.ReadProductByCategorie(categorie);
        return new ResponseEntity<>(products,HttpStatusCode.valueOf(200));
    }

    //Delete Product
    @DeleteMapping(value = "/del/{ProductId}",produces = "application/json")
    public ResponseEntity<ApiResponse> Delete(@PathVariable Integer ProductId){
        this.productService.DeleteProduct(ProductId);
        return new ResponseEntity<ApiResponse>(new ApiResponse("Product deleted"),HttpStatusCode.valueOf(200));
    }



    //Update Product
    @PutMapping("/{ProductId}")
    public ResponseEntity<ProductDto> UpdateProduct(@RequestParam MultiValueMap<String, String> formData, @RequestParam("img") MultipartFile file,@PathVariable Integer ProductId) throws IOException {
        ProductDto productDto = new ProductDto();
        productDto.setProductName(formData.getFirst("productname"));
        productDto.setDescription(formData.getFirst("description"));
        productDto.setWeight(Float.valueOf(formData.getFirst("weight")));
        productDto.setPrice(Float.valueOf(formData.getFirst("price")));
        //productDto.setImg(file.getBytes());

        ProductDto save = this.productService.UpdateProduct(productDto,ProductId);

        return new ResponseEntity<ProductDto>(save,HttpStatusCode.valueOf(200));
    }



}
