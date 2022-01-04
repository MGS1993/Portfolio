import "./App.css";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Landing from "./components/Landing";

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
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
