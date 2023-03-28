import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Bars } from 'react-loader-spinner';
import { useParams } from "react-router-dom";
import {getProducto} from '../../store/posts/action'
import { EditOutlined,EllipsisOutlined,SettingOutlined } from '@ant-design/icons';
import { Avatar,Card } from 'antd';

const ProductoComponent = () => {
  const {producto, loadingProducto} = useSelector((state) => state.ProductsReducer)
  const params = useParams()
  const dispatch = useDispatch()
  const { Meta } = Card;

  useEffect(() =>{
    dispatch(getProducto(params.id))
  }, [])

  if(loadingProducto){
    return(
      <Bars height={100} width={100}>

      </Bars>
    )
  }

  return (
  <div className='CardAlone'> 
     <Card className='Card' cover={
      <img alt="example" src={producto.image} style={{width:'200px'}}/>}
      actions={[
        <ion-icon name="heart-outline"></ion-icon>,
        <ion-icon name="trash-outline"></ion-icon>
      ]}>

      <Meta 
      title={producto.title}
        description={producto.description}
      />
    </Card>
  </div>
)};

ProductoComponent.propTypes = {};

ProductoComponent.defaultProps = {};

export default ProductoComponent;
