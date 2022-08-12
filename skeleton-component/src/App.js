import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import Skeleton from "./components/Skeleton";

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  width: 100%;
`;

const Image = styled.img`
  width: 320px;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;

const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const Placeholder = () => (
  <Container>
    <ImageWrapper>
      <Skeleton width={320} height={220} />
    </ImageWrapper>
    <Info>
      <Skeleton width={150} height={29} />
      <div style={{ height: "8px" }} />
      <Skeleton width={200} height={19} />
    </Info>
  </Container>
);

const Item = () => (
  <Container>
    <ImageWrapper>
      <Image src="https://cdn.pixabay.com/photo/2018/09/24/03/05/cat-3699032_960_720.jpg" />
    </ImageWrapper>
    <Info>
      <Title>Kittens are gathering</Title>
      <Description>So cute</Description>
    </Info>
  </Container>
);

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return <Base>{loading ? <Placeholder /> : <Item />}</Base>;
}

export default App;
