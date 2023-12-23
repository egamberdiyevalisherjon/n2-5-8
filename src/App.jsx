import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
