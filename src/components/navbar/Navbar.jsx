import React, { useState } from "react";
import "./navbar.scss";
import Logo from "./../../assets/Logo_ML@2x.png.png.png";
import Lupa from "./../../assets/ic_Search.png";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setListProduct  } from "../../slices/productSlice";

export default function Navbar() {

  let history = useHistory();

  //Dispatch para enviar los datos al store
  const dispatch = useDispatch();

  const [element, setQuery] = useState("");

  //Metodos de busqueda por eventos
  const eventEnter = (evt) => (evt.key === "Enter" ? search(element): "");
  const eventClick = () => search(element);

  const goMain = () => {
    history.push('/prueba-tecnica/');
  };

  //Metodo que realiza la busqueda de datos con la API de mercado libre
  const search = () => {
    try {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${element}`)
        .then((res) => res.json())
        .then((result) => {

          //Variable que contiene todos los resultados de la busqueda
          //Solo mostrara 4 datos
          const products = result.results.splice(0, 4);

          //Despacha los datos a el store global
          dispatch(setListProduct(products));
          setQuery("");
        });

        goMain();

    } catch (Exception) {}
  };

  return (
    <div className="navContainer">
      <div className="search-cont">
        <img
          onClick={()=>goMain()}
          className="searchBar-logo"
          src={Logo}
          width="80"
          alt="logo"
        />

        <input
          //obtiene la informacion del input
          onChange={(e) => setQuery(e.target.value)}
          value={element}
          onKeyPress={eventEnter}
          className="searchBar"
          placeholder="Nunca dejes de buscar"
        />

        <button className="btn-searchBar" onClick={() => eventClick(element)}>
          <img src={Lupa} alt="magnifier-icon" />
        </button>
      </div>
    </div>
  );
}
