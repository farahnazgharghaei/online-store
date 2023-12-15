import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserPage from "./pages/UserPage";

function App() {
  const links = ["Home", "login", "Signup", "User"];
  // //js + xml
  return (
    <BrowserRouter>
      <Header logo="Brand" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Footer links={links} />
    </BrowserRouter>
  );
}

export default App;
