import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  background: #fff;
  border-radius: 4px;
  height: 400px;
  outline: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 5px 15px;
  background: #90909078;

  & svg {
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Content = styled.div`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;

  & div {
    flex: 1;
    outline: none;
  }
`;

export { Container, Header, Content };
