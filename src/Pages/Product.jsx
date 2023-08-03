import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';
import { Add, Remove, } from '@material-ui/icons';
import { mobile,tablet } from '../responsive';
import { Link, useParams } from 'react-router-dom';
import axiosHttp from '../services/interceptor';

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${tablet(
        {
          padding:'10px',
          flexDirection:'column'
        }
    )};
`;
const ImgContainer = styled.div`
    flex: 1;
    /* padding: 50px; */
    display: flex;
   
`;
const Image = styled.img`
    transform: scale(.8);
    width: 70%;
    height: 50vh;
    object-fit: contain;
    transition: all .6s ease;
    ${mobile(
        {
            height:'40vh',
        }
    )};

    &:hover{
        cursor: pointer;
        transform: translate(20%, 0%) scale(1.3);
    }
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile(
        {
          padding:'10px',
        }
    )};
`;
const Title = styled.h1`
    font-weight: 200px;
`;
const Description = styled.p`
    margin: 20px 0px;
`;

const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile(
        {
          width:'100%',
        }
    )};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile(
        {
          width:'100%',
        }
    )};
    margin-top: 20px;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: #fff;
    cursor: pointer;
    font-weight: 500;
        &:hover{
            background-color: #f8f4f4;
        }
`;

const BackBtn = styled.span`
    position: relative;
    top: 20px;
    left: 1.3%;
`;


export default function Product() {
  let params = useParams();
  const [ productDetails, setProductDetails ] = useState([]);

  console.log('params',+params.id);

  const getProductDetails = () => {
        axiosHttp.get(`/products/${+params.id}`).then(res => {
            console.log('res',res);
            if(res.status === 200){
                setProductDetails(res.data)
            }
        })
        .catch(error => {
            console.log('error',error)
        });
  };
  
  useEffect(() => {
    getProductDetails()
  },[])

  return (
    <Container>
        <Navbar/>
        <Announcement/>
          <BackBtn> <Link to={'/products'} className='removeUnderLine'>Go to Products</Link></BackBtn>
            <Wrapper>
                <ImgContainer>
                    <Image src={productDetails.image}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{productDetails.title}</Title>
                    <Description>{ productDetails.description }</Description>
                    <Price>${ productDetails.price }</Price>
                    {/* <FilterContainer>
                         <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black'/>
                            <FilterColor color='darkblue'/>
                            <FilterColor color='gray'/>
                         </Filter>
                         <Filter>
                            <FilterTitle>Size</FilterTitle>
                                <FilterSize>
                                    <FilterSizeOption>XS</FilterSizeOption>
                                    <FilterSizeOption>S</FilterSizeOption>
                                    <FilterSizeOption>M</FilterSizeOption>
                                    <FilterSizeOption>L</FilterSizeOption>
                                    <FilterSizeOption>XL</FilterSizeOption>
                                    <FilterSizeOption>XXL</FilterSizeOption>
                                </FilterSize>
                         </Filter>
                    </FilterContainer> */}
                    <AddContainer>
                        {/* <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer> */}
                        <Button>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
