import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/posts/action';
import { Bars } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { Card, Space } from 'antd';
import { Container } from 'react-bootstrap';

const Productos = () => {
  const { Meta } = Card;
  const dispatch = useDispatch()
  const {products, loadingProducts} = useSelector((state) => state.ProductsReducer)

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

  return(
    <>
      <div className='inputCon'>
        <input type='text' placeholder='Look your product' className='inputLook'></input>  
      </div>
        <Container className='CardContainer'>
          {products.map(product => {
            return(
              <Space direction="vertical" size={16}>
                <Card title={product.title} extra={<Link to={`/product/${product.id}`}>More</Link>} style={{ width: 300 }}>
                  <div className='CardProducts'>
                    <img src={product.image} style={{width: '200px', height: '200px'}}/>
                    <p style={{marginTop:'50px', fontSize:'larger'}}>€ {product.price}</p>
                    <div style={{display:'flex', flexDirection:'row', marginTop:'20px'}}>
                      <p>{product.rating.rate}</p>
                      <p style={{marginLeft:'120px'}}>{product.rating.count}</p>
                    </div>
                  </div>
              </Card>

              </Space>

            )
          })}
        </Container>
    </>
)};

Productos.propTypes = {};

Productos.defaultProps = {};

export default Productos;
