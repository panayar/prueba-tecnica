import currency from "currency.js";


//Metodo para setear los valores numericos correspondientes a moneda
const formatPrice = (value = 0) =>
  currency(Number(value), {
    separator: ".",
    symbol: "$",
    decimal: ".",
    precision: 0,
  }).format();

export default formatPrice;
