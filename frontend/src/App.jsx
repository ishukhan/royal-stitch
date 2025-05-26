import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from "./components/Headers";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditon from "./pages/TermsAndConditions";
// import images
import bannermens from "./assets/categorybanner/mens.png";
import bannerwomens from "./assets/categorybanner/womens.png";
import bannerkids from "./assets/categorybanner/kids.png";
// import bannerwomens from "./assets/bannerwomens.png"
// import bannerkids from "./assets/bannerkids.png"

export default function App() {
  return (
    <main className="bg-primary text-tertiary text">
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens"
            element={<Category category="men" banner={bannermens} />}
          />
          <Route
            path="/womens"
            element={<Category category="women" banner={bannerwomens} />}
          />
          <Route
            path="/kids"
            element={<Category category="kid" banner={bannerkids} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditon />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
