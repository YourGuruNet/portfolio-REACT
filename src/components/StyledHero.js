import styled from "styled-components";

const StyledHero = styled.header`
  height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
`;

export default StyledHero;
