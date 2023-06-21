import "./App.css";
import ShopInformation from "./components/ShopInformation/ShopInformation";
import Head from "./components/header/Head";

function App() {
  return (
    <div className="container">
      <Head />
      <div className="background" />
      <div className="shopInformation">
        <ShopInformation />
      </div>
    </div>
  );
}

export default App;
