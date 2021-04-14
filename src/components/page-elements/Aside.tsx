import styled from "styled-components";

const AsideWrapper = styled.aside`
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  background: #e1bee7;
`;

export const Aside = () => {
  return (
    <>
      <AsideWrapper>aside</AsideWrapper>
    </>
  );
};
