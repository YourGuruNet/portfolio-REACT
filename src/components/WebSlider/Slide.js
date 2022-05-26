import React from 'react';
import styled from 'styled-components';

export const Slide = () => {
  return (
    <SlideWrapper>Slide</SlideWrapper>
  )
}


const SlideWrapper = styled.div`
  height: 90vh;
  max-width: 180rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;