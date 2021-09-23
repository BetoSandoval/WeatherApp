import styled from "styled-components";

const LeftElement = styled.div`
  position: absolute;
  width: 32%;
  height: 1023px;
  left: 0px;
  top: 0px;

  background: #1e213a;

  @media (max-width: 770px) {
    width: 100%;
    height: 810px;
  }
`;

export default LeftElement;
