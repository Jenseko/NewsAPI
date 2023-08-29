import "./App.css";
import { Route, Routes } from "react-router-dom";

// import components
import Navbar from "./components/Navbar";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewsArticleDetails from "./pages/NewsArticleDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article/:id" element={<NewsArticleDetails />} />
      </Routes>
    </div>
  );
}

export default App;
