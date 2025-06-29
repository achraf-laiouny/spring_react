package com.organica.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CategorieDto {
    private int categorieId;
    private String name;
    private String description;
    private String image;
    private String activeImage;
}
