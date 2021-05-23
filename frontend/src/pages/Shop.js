import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import SideMenu from "../components/SideMenu";
import Loading from '../components/Loading';
import "../styles/Shop.css";

function Shop(props) {
  // Variabila de stare in care stocam produsele
  const [products, setProducts] = useState(null);

  // Luam din baza de date produsele si le plasam in variabila de stare dupa ce le-am preluat
  const getProducts = () => {
    const url = `/dashboard/shop/process`;

    // Executia requestului
    fetch(url, {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json()) // Primul request returnat de back end pe care il transformam in json
      .then((res) => {
        setProducts(res);
      });
  };

  // React Hook care se executa dupa randarea paginii
  useEffect(() => {
    getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Conditie suplimentara care verifica daca s-au incarcat produsele din baza de date
  return !products ? (
    <Loading />
  ) : (
    <div className="shop-container">
      <h2 className="shop-text">Medical Products</h2>
      <div className="cards">
        {products.map((product, index) => (
          <Card data={product} key={index} user={props.user} />
        ))}
        <SideMenu/>
        <div className="blank-space"></div>
      </div>
    </div>
  );
}

export default Shop;
