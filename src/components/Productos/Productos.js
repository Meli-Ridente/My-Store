import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/posts/action';
import { Bars } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Card, Space, Rate } from 'antd';
import {SearchOutlined, StarOutlined} from '@ant-design/icons'

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Productos = () => {
  const { Meta } = Card;
  const dispatch = useDispatch()
  const {products, loadingProducts} = useSelector((state) => state.ProductsReducer)
  const [busqueda, setBusqueda] = useState(products);



  useEffect(() => {
    dispatch(getProducts())
  },[])
  
  if (loadingProducts){
    return (
      <Container>
        <Bars 
          height={100}
          width={100}>
        </Bars>
      </Container>
    )
  }

  const handleChange = e=>{
    setBusqueda(e.target.value)
    filterProducts(e.target.value)
  }
  
  const filterProducts = (busqueda) => {
    var results = products.filter((product) => {
      if(product.title.toLowerCase().includes(busqueda.toLowerCase())){
        return product;
      }
    })
    setBusqueda(results)
  }

  console.log(busqueda)
  return(
    <>
      <div className='inputCon'>
        <input type='text' placeholder='Look your product' className='inputLook' onChange={handleChange}></input> 
        <SearchOutlined style={{fontSize:'25px'}} />
      </div>
      <Container className='CardContainer'>
        <SimpleBar style={{ maxHeight: 600 , width: 1300, padding: '20px'}} className='CardContainer'>
        
          {busqueda.map(product => {
            return(
              <Space direction="vertical" size={14}>
                <Card title={product.title} extra={<Link to={`/product/${product.id}`}>More</Link>} style={{ width: 300 , margin: '20px'}}>
                  <div className='CardProducts'>
                    <img src={product.image} style={{width: '200px', height: '200px'}}/>
                    <p style={{marginTop:'50px', fontSize:'larger'}}>€ {product.price}</p>
                    <div style={{display:'flex', flexDirection:'row', marginTop:'20px'}}>
                      <Rate allowHalf defaultValue={product.rating.rate} />
                    </div>
                  </div>
                </Card>
              </Space>
            )
          })}
        </SimpleBar>
      
      </Container>
    </>
)};

Productos.propTypes = {};

Productos.defaultProps = {};

export default Productos;
