import { ArrowLeftOutlined,ArrowRightOutlined } from "@material-ui/icons";
import { styled } from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #fff7f7;
    border-radius: 50%;
    cursor: pointer;
    text-align: center;
    line-height: 4;

`;

export default function Slider() {
  return (
    <Container>
        <Arrow>
            <ArrowLeftOutlined/>
        </Arrow>
        <Arrow>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}
