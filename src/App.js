import "./App.css";
import ShopInformation from "./components/ShopInformation/ShopInformation";
import Head from "./components/header/Head";
import ShowProducts from "./components/showProducts/showProducts";

function App() {
  return (
    <div className="container">
      <Head />
      <div className="background" />
      <div className="shopInformation">
        <ShopInformation />
      </div>
      <div >
        <ShowProducts className="showProducts"/>
      </div>
    </div>
  );
}

export default App;
