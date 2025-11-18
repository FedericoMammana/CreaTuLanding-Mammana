import Navbar from "./components/Navbar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer mensaje={"Bienvenidos a mi shop"} />
      <ItemCount />
    </>
  );
}

export default App;
