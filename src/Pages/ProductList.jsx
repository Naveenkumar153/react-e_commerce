import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Products from '../Components/Products';
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';

const Container = styled.div`
`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding:10px;
    margin-left: 20px;
    cursor: pointer;
`;
const Option = styled.option``;

export default function ProductList() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText> Filter Products:
                
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                </Select>
                 </FilterText>
            </Filter>
            <Filter>
                <FilterText> Sort Products: 
                    <Select>
                        <Option disabled selected>
                            Newest
                        </Option>
                        <Option>Price (low to high)</Option>
                        <Option>Price (high to low)</Option>
                    </Select>
                </FilterText>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
