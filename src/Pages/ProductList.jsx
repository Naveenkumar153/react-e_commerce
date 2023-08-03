import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Products from '../Components/Products';
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';
import { mobile } from '../responsive';
import { useNavigate } from 'react-router-dom';

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
    ${mobile(
        {
          width:'0px 20px',
          display:'flex',
          flexDirection:'column'
        }
    )};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile(
        {
          marginRight:'0px',
        }
    )};
`;

const Select = styled.select`
    padding:10px;
    margin-left: 20px;
    cursor: pointer;
    ${mobile(
        {
          margin:'10px 0px',
        }
    )};
`;
const Option = styled.option``;

export default function ProductList() {

  const navigate = useNavigate();

  const viewProductDetail = (id) => {

  };

  return (
    <Container>
        <Announcement/>
        <Navbar/>
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
