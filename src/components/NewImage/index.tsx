import React from "react";
import { Container } from "./styles";

interface NewImageProps {
  onUrl: string;
  onIsValid: boolean;
}

export function NewImage({ onUrl, onIsValid }: NewImageProps) {

  return (
    <>
    { onUrl
      ? <Container>
          <a href={onUrl}>
            <img src={onUrl} alt="Imagem"/>
          </a>
        </Container>
      : !onIsValid
        ? <Container>
            <p>Largura e/ou altura inválidos.</p>
          </Container>
        : <p></p>
    }
    </>
  )
}