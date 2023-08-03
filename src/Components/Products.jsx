import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'  
import { popularProducts } from '../data';
import Product from './Product';
import axiosHttp from '../services/interceptor';

const Container  = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export default function Products() {

  const [allData,setAllData] = useState([]);

  const getAllProducts = () => {
    axiosHttp.get('/products').then(res => {
        console.log('res',res);
        if(res.status === 200){
          setAllData(res.data)
        }
      })
      .catch(error => {
        console.log('error',error)
      });
  };

  useEffect(() => {
    getAllProducts();
  },[]);

  return (
    <Container>
        {
            allData.map((product) => <Product products={product} key={product.id}/>)
        }
    </Container>
  )
}
