import GlobalStyles from "./components/styled/GlobalStyles";
import Hero from "./components/hero/Hero";
import ReactProjects from "./components/projects/ReactProjects";
import { ThemeProvider } from "styled-components";
import WebProjects from "./components/projects/WebProjects";

const theme = {
  background: "#000000",
  primary: "#fff",
  secondary: "#3F0071",
  tileBg: "#000000",
  tileBgHover: "#FB2576",
  modalBg: "#000000",
  hoverOpacity: 0.8,
  hoverScale: 0.98,
  hoverCursor: "pointer",
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Hero />
        <ReactProjects />
        <WebProjects />
      </ThemeProvider>
    </>
  );
}

export default App;
