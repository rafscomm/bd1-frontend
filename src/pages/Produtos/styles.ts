import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 85%;
  height: 100vh;
  align-items: center;
  .menu {
    display: flex;
    margin-bottom: 10px;
    width: 50%;
  }
`;


export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.75rem 1rem;
  width: 80%;

  @media (max-width: 992px) {
    .container {
      grid-template-columns: auto;
    }
  }
  /* justify-content: center; */
  /* .item { */
  /* background-color: #000; */
  /* text-align: center; */
  /* width: 20px; */
  /* font-size: 30px; */
  /* } */
`;
