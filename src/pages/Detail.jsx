import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ItemInfo from "../components/ItemInfo/ItemInfo";
import { setProductDetail, setProductDescription } from "../slices/productSlice";
import Navbar from "../components/navbar/Navbar";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const [condition, setCondition] = useState('');
  const productDetail = useSelector((state) => state.product.productDetail);
  const productDescription = useSelector((state) => state.product.productDescription);

  useEffect(() => {
    getProduct();
    getDescription();

    return () => {
      setState({});
    };

  }, []);

  const getProduct = () => {
    try {
      fetch(`https://api.mercadolibre.com/items/${id}`)
        .then((res) => res.json())
        .then((result) => {
          dispatch(setProductDetail(result));
        });
    } catch (Exception) {}
  };

  const getDescription = () => {
    try {
      fetch(`https://api.mercadolibre.com/items/${id}/description`)
        .then((res) => res.json())
        .then((result) => {
          dispatch(setProductDescription(result.plain_text));
        });
    } catch (Exception) {}
  }


  const getCondition = (contition) => {

     if(productDetail !== undefined) {

        if(productDetail.condition === "used") {
          return "Usado"
        }else {
          return "Nuevo"
        }

     }

  }



  return (
      <div>
      <Navbar/>
      {
        productDetail.id === id  && productDetail !== undefined?
        <>
        <ItemInfo  thumbnail={productDetail.pictures[0].url}
        title={productDetail.title}
        condition={getCondition()}
        total_sold_items={productDetail.sold_quantity}
        price={productDetail.price}
        description={productDescription}
        /></>: ""
      }
      </div>
  );
}


