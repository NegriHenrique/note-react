import styled from "styled-components";

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  max-width: 500px;
  margin: auto;
  margin-top: 30px;
  color: #8600b3;
  & svg {
    cursor: pointer;
  }
`;

const CardContainer = styled.div`
  margin: 35px auto;
  overflow-y: auto;
  max-width: 500px;
`;

export { Title, CardContainer };
