import "./App.css";
import Home from "./pages/Home/Home";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
