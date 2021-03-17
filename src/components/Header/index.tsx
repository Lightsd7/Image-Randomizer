import React from "react";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <a href="https://www.linkedin.com/in/raphael-molina-bedran-08a52699/">Linkedin</a>
        <p>|</p>
        <a href="https://picsum.photos/">Consultar API</a>
      </Content>
    </Container>
  )
}