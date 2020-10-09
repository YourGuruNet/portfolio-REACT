import React from "react";
import LoadingGif from "../images/gif/gif.gif";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingContainer>
      <img src={LoadingGif} alt="loading" />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  text-transform: capitalize;
  text-align: center;
  img {
    max-width: 15rem;
  }
`;
