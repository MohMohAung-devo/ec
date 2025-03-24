import "./App.css";
import Home from "./pages/home/Home";
import { Product } from "./pages/product/Product";
import ProductDetail from "./pages/product-detail/Product-detail";
import Contact from "./pages/contact/Contact";
import Layout from "./pages/layout";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/product/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
