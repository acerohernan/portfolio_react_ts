import "./App.scss";
import { Navbar } from "./components";
import { About, Footer, Header, Skills, Work } from "./container";
import { LanguageProvider } from "./i18n/context";

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
