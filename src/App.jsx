import Navbar from "./components/Navbar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer mensaje={"Bienvenidos a mi App"} />}
          />
          <Route
            path="/category/:type"
            element={<ItemListContainer mensaje={"Estas en la categoría: "} />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

// <ItemCount /> este es el contador que teníamos arriba
export default App;
