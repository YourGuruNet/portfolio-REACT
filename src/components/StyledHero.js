import styled from 'styled-components';

const StyledHero = styled.header`
  height: 95vh;
  background: var(--lightGradient),
    url(${(props) => props.img}) bottom/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
`;

export default StyledHero;
