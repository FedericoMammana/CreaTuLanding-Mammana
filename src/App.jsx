import Navbar from "./components/Navbar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

// <ItemCount /> este es el contador que teníamos arriba
export default App;
