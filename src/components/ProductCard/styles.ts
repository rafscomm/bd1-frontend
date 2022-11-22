import styled from 'styled-components';

export const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 360px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.3s;
  img {
    width: 100%;
  }
  :hover {
    transform: scale(1.01);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #845ec2;
  transition: all 0.4s;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  :hover {
    opacity: 0.4;
  }
`;
