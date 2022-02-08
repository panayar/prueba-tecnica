import React from "react";

import "./itemInfo.scss";
import Free from "../../assets/ic_shipping@2x.png.png.png";
import formatPrice from "../../utils/format";


//Parametros del componente
const ItemInfo = ({ thumbnail , title , condition, total_sold_items, price, description  }) => {
  return (
    <div className="detail-container">
      <div className="detail-img">
        <img src={thumbnail} alt={title} />
      </div>

      <div className="detail-description">
        <div className="product-condition">
          {condition} - {total_sold_items} vendidos
        </div>
        <div className="title">{title} </div>
        <div className="Price">{formatPrice(price)}</div>
        <button className="detail-btn">Comprar</button>
      </div>

      <div className="product-description">
        <div className="title-description">Descripción del producto</div>
        <div className="description">
        
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
