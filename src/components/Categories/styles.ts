import styled from 'styled-components';

export const Container = styled.div<{ clicked?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  cursor: pointer;
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    .dot {
      width: 10;
      height: 10;
      background: ${({ clicked }) => (clicked ? '#808080' : '#d3d3d3')};
      border-radius: '20px';
      margin-right: '5px';
    }
  }

  .Separator {
    width: 100%;
    height: 3px;
    background-color: ${({ clicked }) => (clicked ? '#808080' : '#d3d3d3')};
    margin-top: 10;
  }

  /* :hover {
    back
  } */
`;
