package com.organica.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class PageDto {
    private List<ProductDto> listProduct;
    private int totalPages;
    private long totalElements;
    private int number;
    private int size;
}
