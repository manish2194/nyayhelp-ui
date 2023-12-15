// components/Container.js
import styled from "styled-components";

const Container = styled.div`
  // max-width: 1200px;
  // margin: 0 auto;
  padding: 0 15px;
  // background: linear-gradient(135deg, #f5f7fa, #ffffff);

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export default Container;
