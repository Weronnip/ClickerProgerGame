import { Layout } from "./components/layout/layout";
import { Clicker } from "./components/clicker/clicker";
import { ClickerProvider } from "./components/context/ClickerContext/clickerContext";
import { ShopProvider } from "./components/context/ShopContext/shopContext";

function App() {
  return (
    <ClickerProvider>
      <ShopProvider>
        <Layout /> 
        <Clicker />
      </ShopProvider>
    </ClickerProvider>
  );
}

export default App;