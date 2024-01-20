import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./components/login";
import SignupPage from "./pages/SignupPage";
import UserPage from "./pages/UserPage";
import { useState } from "react";

function App() {
  const links = ["Home", "login", "Signup", "User"];
  const [totalQty, settotalQty] = useState(0);

  const handelTotalQty = (counter) => {
    settotalQty(totalQty + counter);
  };
  // //js + xml
  return (
    <BrowserRouter>
      <Header logo="Brand" totalQty={totalQty} />
      <Routes>
        <Route
          path="/"
          element={<HomePage handelTotalQty={handelTotalQty} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Footer links={links} />
    </BrowserRouter>
  );
}

export default App;
