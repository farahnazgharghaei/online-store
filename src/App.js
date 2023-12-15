import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import ProductList from "./components/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const links = ["Home", "Products", "About Us", "Contact Us"];
  //js + xml
  return (
    <BrowserRouter>
      <Header logo="Brand" links={links} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer links={links} />
    </BrowserRouter>
  );
}

export default App;

// function sum(x,y) {
//   return x+y
// }

// sum (10, 30)
