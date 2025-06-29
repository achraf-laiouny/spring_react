package com.organica.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

    @Entity
    @NoArgsConstructor
    @Data
    @ToString
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ProductId;
    @Column
    private String ProductName;

    private String Description;
    private Float Price;
    private Float Weight;
    private String img;
    @ManyToOne
    private Categorie categorie;

    @OneToMany(mappedBy = "products")
    private List<CartDetalis> list;

}
