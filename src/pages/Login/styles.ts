import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  img {
    width: 50%;
  }

  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
    .button-container {
      width: 60%;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

export const Input = styled.input`
  width: 60%;
  height: 3rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.4s;
  margin: 10px;
  padding-left: 1.5rem;

  ::placeholder {
    font-weight: bold;
  }

  :focus {
    outline: none;
    transform: scale(1.02);
  }
`;

export const Button = styled.button`
  width: 20%;
  height: 3rem;
  border: none;
  background: #845ec2;
  border-radius: 5px;
  font-size: 1.1rem;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s;
  :hover {
    transform: scale(1.03);
  }
`;
