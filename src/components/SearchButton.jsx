import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 0.6rem;
  cursor: pointer;
  position: absolute;
  width: 16.1rem;
  height: 4rem;
  left: 4.6rem;
  top: 4.2rem;
  background: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    position: absolute;

    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    color: #e7e7eb;
    text-align: center;
    margin: 1rem;
  }
`;

export default function SearchInput() {
  return (
    <Button>
      <p>Search for places</p>
    </Button>
  );
}
