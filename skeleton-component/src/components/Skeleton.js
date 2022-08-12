import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const pulseKeyframe = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const Content = styled.div`
  background-color: #f4f4f4;
  animation: ${pulseKeyframe} 1.5s ease-in-out 0.5s infinite;
  border-radius: 8px;
`;

const Skeleton = ({ width, height }) => {
  return (
    <Content style={{ width: `${width}px`, height: `${height}px` }}></Content>
  );
};

export default Skeleton;
