import Navbar from "./components/Navbar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer mensaje={"Bienvenidos a mi shop"} />
    </>
  );
}

export default App;
