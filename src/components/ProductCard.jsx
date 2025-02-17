import styled from "@emotion/styled";

function ProductCard({ image, title, description, category, price }) {
  return (
    <Container>
      <Card>
        <Image src={image} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Category>{category}</Category>
        <Price>${price}</Price>
      </Card>
    </Container>
  );
}

export default ProductCard;

const Price = styled.div`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: rgb(143, 31, 31);
  }
`;

const Category = styled.div`
  font-size: 9px;
  text-transform: uppercase;
  margin: 10px 0px;
  color: rgb(207, 117, 117);
`;

const Description = styled.div`
  font-size: 12px;
  text-align: center;
  color: #6b6b6b;
  nargin: 20px;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    color: rgb(143, 31, 31);
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: 0.4s;
  :hover {
    transform: scale(1.3);
  }
`;

const Card = styled.div`
  width: 300px;
  height: 350px;
  margin: 30px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  /*justify-content: center;*/
  padding: 20px; 0px;
  align-items: center;
  box-shadow: rgba(161, 56, 56, 0.16) 0px 1px 4px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: poppins;
`;
