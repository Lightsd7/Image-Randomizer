import styled from "styled-components";

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;

  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 767px) {
    top: 70%
  }

  img {
    width: 100%;
  }

  p {
    color: var(--red);
  }
`;
