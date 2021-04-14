import { BrowserRouter, Route } from "react-router-dom";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import theme, { themeTwo } from "./theme";
import { Body } from "./components/page-elements/Body";
import { Container } from "./components/page-elements/Container";
import { Header } from "./components/page-elements/Header";
import { Aside } from "./components/page-elements/Aside";
import { Footer } from "./components/page-elements/Footer";
import styled from "styled-components";
import React from "react";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

const BodyWrapper = styled.main`
  grid-column: 1 / 3;
  background: #dcedc8;
`;

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={themeTwo}>
          <Container>
            <Header />
            <BodyWrapper>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </BodyWrapper>
            {/* <Aside /> */}
            <Footer />
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
