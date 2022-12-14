import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Base = styled.div``;

const Container = styled.div`
  position: relative;
  width: 60%;
  margin: auto;
`;

const ArrowButton = styled.button<{ pos: "left" | "right" }>`
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 8px 12px;
  font-size: 35px;
  background-color: transparent;
  margin: 0;
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;

  ${({ pos }) => (pos === "left" ? "left:0" : "right: 0")}
`;

const CarouselList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  overflow: hidden;
`;

const CarouselListItem = styled.li<{ activeIndex: number }>`
  width: 100%;
  flex: 1 0 100%;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: 200ms ease;

  img {
    width: 100%;
  }
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin-left: 4px;
`;

const NavButton = styled.button<{ isActive?: boolean }>`
  background-color: #000;
  width: 4px;
  height: 8px;
  opacity: ${(isActive) => (isActive ? 0.3 : 0.1)};
`;

const banners = [
  "https://cdn.pixabay.com/photo/2022/07/06/18/34/florence-7305768_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/05/18/12/04/flower-7205105_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/11/19/05/43/architecture-3824660_960_720.jpg",
  "https://cdn.pixabay.com/photo/2022/07/10/19/30/house-7313645_960_720.jpg",
];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFocuse, setIsFocuse] = useState<boolean>(false);
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % banners.length);
  };
  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(banners.length - 1);
    } else {
      setActiveIndex((prev) => (prev - 1) % banners.length);
    }
  };
  const goToIndex = (idx: number) => {
    setActiveIndex(idx);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isFocuse) {
      timer = setInterval(handleNext, 3000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isFocuse]);
  return (
    <Base>
      <Container
        onMouseEnter={() => setIsFocuse(true)}
        onMouseLeave={() => setIsFocuse(false)}
      >
        <ArrowButton onClick={handlePrev} pos="left">{`<`}</ArrowButton>
        <CarouselList>
          {banners.map((banner, idx) => (
            <CarouselListItem activeIndex={activeIndex} key={idx}>
              <img src={banner} />
            </CarouselListItem>
          ))}
        </CarouselList>
        <ArrowButton onClick={handleNext} pos="right">{`>`}</ArrowButton>
      </Container>

      <Nav>
        {Array.from({ length: banners.length }).map((_, idx) => (
          <NavItem key={idx} onClick={() => goToIndex(idx)}>
            <NavButton isActive={activeIndex === idx} />
          </NavItem>
        ))}
      </Nav>
    </Base>
  );
};

export default Carousel;
