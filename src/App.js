import "./App.css";
import Catagories from "./Components/Catagories/Catagories";
import CustomerCare from "./Components/CustomerCare/CustomerCare";
import Feature from "./Components/Feature/Feature";
import FlashSale from "./Components/FlashSale/FlashSale";
import Footer from "./Components/Footer/Footer";
import JustYou from "./Components/JustYou/JustYou";
import MiniNav from "./Components/MiniNav/MiniNav";
import Payment from "./Components/Payment/Payment";
import Sidebar from "./Components/Sidebar/Sidebar";
import Slider from "./Components/Slider/Slider";
<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>;

function App() {
  return (
    <div className="App">
      <MiniNav></MiniNav>
      <Slider></Slider>
      <Sidebar></Sidebar>
      <Feature></Feature>
      <FlashSale></FlashSale>
      <Catagories></Catagories>
      <JustYou></JustYou>
      <CustomerCare></CustomerCare>
      <Payment></Payment>
      <Footer></Footer>
    </div>
  );
}

export default App;
