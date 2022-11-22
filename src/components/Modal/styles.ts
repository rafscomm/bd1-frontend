import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5px;

  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
`;

export const ModalContent = styled.div`
  position: absolute;
  width: 50%;
  height: 50%;
  background-color: #fff;
  border-radius: 5px;

  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
