import React, { useState } from "react";
import { NewImage } from "../NewImage";
import { Container } from "./styles";

export function Dashboard() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleNewImage() {
    width && height
    ? fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) => setUrl(response.url))
    : setIsValid(false);
  }

  return (
    <Container>
      <h2>Procurar imagem aleatória com as medidas de:</h2>
      <input
        type="number"
        pattern="[0-9]"
        placeholder="largura"
        onChange={(e) => setWidth(e.target.value)}
        value={width}
      />
      <input
        type="number"
        pattern="[0-9]"
        placeholder="altura"
        onChange={(e) => setHeight(e.target.value)}
        value={height}
      />
      <div>
        <button
          type="submit"
          onClick={handleNewImage}
        >
          Procurar
        </button>
      </div>

      <NewImage
        onUrl={url}
        onIsValid={isValid}
      />

    </Container>
  )
}