import "./App.css";
import ShopInformation from "./components/ShopInformation/ShopInformation";
import Head from "./components/header/Head";
import ShowProducts from "./components/showProducts/showProducts";
import { FormDataProvider } from "./components/storeData/storeProvider";

function App() {
  return (
    <FormDataProvider>
      <div className="container">
        <Head />
        <div className="background" />
        <div className="shopInformation">
          <ShopInformation />
        </div>
        <div>
          <ShowProducts className="showProducts" />
        </div>
      </div>
    </FormDataProvider>
  );
}

export default App;
