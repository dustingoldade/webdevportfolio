import GlobalStyles from "./components/styled/GlobalStyles";
import Hero from "./components/hero/Hero";
import ReactProjects from "./components/projects/ReactProjects";
import { ThemeProvider } from "styled-components";
import WebProjects from "./components/projects/WebProjects";
import { useRef } from "react";
import { theme } from "./locals/themes";

function App() {
  const projectsRef = useRef(null);
  const scrollHandler = () =>
    projectsRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Hero scrollHandler={scrollHandler} />
        <ReactProjects projectsRef={projectsRef} />
        <WebProjects />
      </ThemeProvider>
    </>
  );
}

export default App;
