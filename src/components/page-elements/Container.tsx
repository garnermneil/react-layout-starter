import styled from "styled-components";

const ContainerWrapper = styled.div`
  background: white;
  height: calc(100vh - 10px);
  box-shadow: 0 0 3px rgba(black, 0.33);

  display: grid;
  grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);
  /* grid-template-rows: min-content min-content 1fr min-content; */
  grid-template-rows: min-content 1fr min-content;
  gap: 1px;

  > * {
    padding: 1rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    > * {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
  }
`;

export const Container = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <>
      <ContainerWrapper>{children}</ContainerWrapper>
    </>
  );
};
