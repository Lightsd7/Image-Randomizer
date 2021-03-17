import React from "react";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
