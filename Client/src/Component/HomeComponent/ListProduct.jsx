import React, { useEffect, useState } from "react";
import { ProductCard } from "../ShopComponent/ProductCard";
import axiosFetch from "../../Helper/Axios";

export const ListProduct = () => {
  const[token,setToken]=useState(sessionStorage.getItem("token"));
  
  const[data,setData]=useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const fatchData = async (page = 0) => {
  
    const response = await axiosFetch({
      "url":`product/?page=${page}&size=8`,
      "method":"GET",
    });
    // const
    console.log(response.data);
    setData(response.data.listProduct);
    setTotalPages(response.data.totalPages);
    setCurrentPage(response.data.number);
  };


  
  useEffect(() => {
    fatchData();
  }, []);

  const[categories,setCategories]=useState([]);
  const fatchCategories = async () => {
  
    const response = await axiosFetch({
      "url":"product/categories",
      "method":"GET",
    });
    // const
    console.log(response.data);
    setCategories(response.data );
  };


  
  useEffect(() => {
    fatchCategories();
  }, []);
   const fatchProductsCategories = async (categorieName) => {
  
    const response = await axiosFetch({
      "url":"product/categorie/" + categorieName,
      "method":"GET",
    });
    // const
    console.log(response.data);
    setData(response.data );
  };
  function handleFilter(categorieName){
    if (categorieName == "All")
      fatchData();
    else
     fatchProductsCategories(categorieName);
    console.log("testtets");
  }

  return (
    <>
      <section id="products" className="section product">
        <div className="container">
          <p className="section-subtitle"> -- Produits Organic --</p>
          <h2 className="h2 section-title">Tous Produits Organic</h2>
          <ul className="filter-list">
            <li key="All">
              <button className="filter-btn " onClick={()=>handleFilter("All")}>
                <img
                  src="./images/filter-1.png"
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src="./images/filter-1-active.png"
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">
                  {"All"}
                </p>
              </button>
            </li>
            {categories.map((cat) => (
            <li key={cat.id}>
              <button className="filter-btn " onClick={()=>handleFilter(cat.name)}>
                <img
                  src={`./images/${cat.image}`}
                  width={20}
                  alt=""
                  className="default"
                />
                <img
                  src={`./images/${cat.activeImage}`}
                  width={20}
                  alt=""
                  className="color"
                />
                <p className="filter-text">
                  {cat.name}
                </p>
              </button>
            </li>
          ))}
          </ul>
          <ul className="grid-list">
            {Array.isArray(data) && data.length > 0 ? (
                data.map((item) => (
               <ProductCard
               key={item.productid}
               id={item.productid}
               name={item.productName}
               description={item.description}
               price={item.price}
               img={item.img}
               />
            ))
        ) : (
            <p>Aucun produit disponible.</p>
          )}
          </ul>
        </div>
      </section>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`page-btn ${index === currentPage ? 'active' : ''}`}
            onClick={() => fatchData(index)}
          >
            {index + 1}
          </button>
        ))}
    </div>
    </>
  );
};
