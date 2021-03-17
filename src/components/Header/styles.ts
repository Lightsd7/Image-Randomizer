import styled from "styled-components";

export const Container = styled.header`
  background: var(--black);
`;

export const Content = styled.div`
  max-width: 1920px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    font-size: 1rem;
    color: var(--purple);
    border: 0;
    padding: 0.7rem 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    text-decoration: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  p {
    color: var(--text-body);
  }
`;
