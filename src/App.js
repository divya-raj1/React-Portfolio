import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Cursor from "./components/Cursor";

function App() {
  return (
    <ThemeProvider>
      <Cursor />
      <Toaster position="bottom-center" />
      <main className="bg-white text-black dark:bg-black dark:text-white">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </ThemeProvider>
  );
}

export default App;