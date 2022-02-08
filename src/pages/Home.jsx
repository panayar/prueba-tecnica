import React from "react";
import "../";
import Navbar from "../components/navbar/Navbar";
import Item from "../components/Item/Item";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import '../scss/home.scss';

export default function Home() {
  //Acceso al estado del enrutador para poder navegar entre componentes 
  let history = useHistory();

  //Datos almacenados en el store
  const products = useSelector((state) => state.product.listProducts);

  //Metodo para  redirigir a detail con el id correspondiente
  const goDetail = (id) => {
    history.push(`/detail-product/${id}/paula-anaya`);
  };

  return (
    <div>
      <Navbar />

      {/* Mapeo de productos */}
      {products.map((product) => (

        <div className="list-container" onClick={() => goDetail(product.id)} key={product.id}>
          <Item title={product.title} thumbnail={product.thumbnail}
          price={product.price} city_name={product.address.city_name}
           free_shipping={product.shipping.free_shipping} />

        </div>
      ))}
    </div>
  );
}
