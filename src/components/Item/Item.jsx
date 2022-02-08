import React from "react";
import "./item.scss";
import Free from "../../assets/ic_shipping@2x.png.png.png";
import formatPrice from "../../utils/format";



//Parametros del componentes
const Item = ({ thumbnail, title, price , city_name , free_shipping}) => {

  return (
    <div className="item-container">
      <div className="item-img" id="contenedor">
        <img src={thumbnail} alt={title} />
      </div>

      <div className="item-detail" id="detalle">
        <div className="item-price">
          <p>
            {formatPrice(price)}
            {free_shipping && (
              <img
                src={Free}
                alt="logo"
                width="20"
                className="item-shipping-img"
                height="20"
              />
            )}
          </p>
          <p className="item-title">{title}</p>
        </div>
      </div>

      <div className="item-city">
        <p>{city_name}</p>
      </div>
    </div>
  );
};

export default Item;
