import styled from "styled-components";

const BodyWrapper = styled.main`
  grid-column: 1 / 3;
  background: #dcedc8;
`;

export const Body = () => {
  return (
    <>
      <BodyWrapper>body</BodyWrapper>
    </>
  );
};
