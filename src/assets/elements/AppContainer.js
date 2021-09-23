import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;

  @media (max-width: 770px) {
      flex-direction: row;
  }
`;

export default AppContainer;
