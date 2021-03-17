import styled from "styled-components";

export const Container = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0rem 3rem;

  background: var(--black-light);
  height: 100vh;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--text-body);
    padding: 2rem 1rem;
  }

  input {
    width: 50%;
    padding: 0px 1.5rem;
    height: 3rem;
    border-radius: 0.25rem;
    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;
    position: relative;
    display: block;
    left: 50%;
    transform: translateX(-50%);

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  button {
    width: 25%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media(max-width:767px) {
      width: 40%;
      padding: 0rem;
    }
  }
`;
