import React from 'react'
import { categories } from '../data'
import CategoriesItem from './CategoriesItem';
import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`;
export default function Categories() {
  return (
    <Container>
        {categories.map(item => <CategoriesItem items={item} key={item.id}/>)}
    </Container>
  )
}
