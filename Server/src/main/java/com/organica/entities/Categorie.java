package com.organica.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Entity
@NoArgsConstructor
@Data
@ToString
public class Categorie {
    @Id
    private int id;
    private String name;
    private String description;
    private String image;
    private String activeImage;

    @OneToMany(mappedBy = "categorie")
    private List<Product> list;
}
