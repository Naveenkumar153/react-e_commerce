import { Add, Remove, DeleteOutline } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { mobile,tablet } from "../responsive";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { removeItem } from "../redux/cartReducer";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const CartEmpty = styled.div`
    text-align:center;
`;

const DeleteIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 5%;
`;

const CartEmptyTitle = styled.h3` margin:1rem 0px; `;

const Cart = () => {

  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);
  const products = useSelector(state => state.cart.products)
  const dispatch = useDispatch();
  const goToProducts = () => { navigate('/products') };
  console.log('products',products);
  useEffect(() => {
    if (products.length !== 0) {
      const totalPrices = products.reduce((acc, cur) => acc + cur.price, 0);
      setTotalPrice(totalPrices);
    } else {
      setTotalPrice(0);
    }
  }, [products]);
  // const getTotal = () => {
  // };

  // useEffect( getTotal() ,0)

  // const products = [
  //    {
  //       id:1,
  //       price:10,
  //       title:'Mens Casual Premium Slim Fit T-Shirts',
  //       image:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A',
  //    },
  //    {
  //       id:2,
  //       price:20,
  //       title:'Kens Casual Premium Slim Fit T-Shirts',
  //       image:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A',
  //    },
  // ]

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        {
          products.length !== 0 && 
          <Top >
            <TopButton onClick={goToProducts}>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              {/* <TopText>Your Wishlist (0)</TopText> */}
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
        }
        {
          products.length !== 0 ?
            <Bottom>
              <Info>
                {
                  products.map(item => {
                    return (
                      <Product>
                        <ProductDetail>
                          <Image src={item.image} />
                          <Details>
                            <ProductName>
                              <b>Product:</b> { item.title }
                            </ProductName>
                            <ProductId>
                              <b>ID:</b> {item.id}
                            </ProductId>
                            {/* <ProductColor color="gray" />
                            <ProductSize>
                              <b>Size:</b> M
                            </ProductSize> */}
                          </Details>
                        </ProductDetail>
                        <PriceDetail>
                          <ProductAmountContainer>
                            <Add style={{ cursor:'pointer' }}/>
                            <ProductAmount>1</ProductAmount>
                            <Remove style={{ cursor:'pointer' }}/>
                          </ProductAmountContainer>
                          <ProductPrice>${ item.price }</ProductPrice>
                        </PriceDetail>
                        <DeleteIcon>
                          <DeleteOutline style={{ cursor:'pointer' }} onClick={ () => dispatch(removeItem(item.id))  }/>
                        </DeleteIcon>
                      </Product>
                    )
                  })
                }
                {/* <Hr /> */}
              </Info>
              <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ {totalPrice.toFixed(2)}</SummaryItemPrice>
                </SummaryItem>
                {/* <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem> */}
                <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>$ {totalPrice.toFixed(2)}</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
              </Summary>
            </Bottom>
           
          : 
          <CartEmpty>
            <CartEmptyTitle>Your cart is empty</CartEmptyTitle>
            <TopButton onClick={goToProducts}>CONTINUE SHOPPING</TopButton>
          </CartEmpty>
          
        }
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;