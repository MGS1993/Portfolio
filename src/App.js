import "./App.css";
import { ThemeProvider } from "styled-components";

import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";

const theme = {
  colors: {
    accent: "#6969d4",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <main>
          <Landing />
          <AboutMe />
          <Projects />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
