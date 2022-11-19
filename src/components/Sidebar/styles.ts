import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 100vh;
  background-color: #2c73d2;
  .link {
    display: flex;
    flex-direction: row;
    padding: 15px;
    margin-top: 22px;
    text-decoration: none;
    color: #fff;
    border-top: solid #fff 1px;
    transition: all 04s;
    :hover {
      opacity: 0.4;
    }
  }
  .link_text {
    margin-left: 8px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;
  h1 {
    margin-left: 5px;
  }
`;
