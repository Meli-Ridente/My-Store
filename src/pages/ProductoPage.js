import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducto } from '../store/posts/action'
import  ProductoComponent  from '../components/Producto/Producto'

const ProductoPage = () => {
  const params = useParams()

  return(
    <div>
      <ProductoComponent></ProductoComponent>
    </div>
  )
};

ProductoPage.propTypes = {};

ProductoPage.defaultProps = {};

export default ProductoPage;
