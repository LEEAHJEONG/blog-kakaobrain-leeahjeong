import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MbHeader from "./components/MbHeader";
import PopUp from "./components/PopUp";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./css/reset.css";
import "./css/common.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <PopUp></PopUp>
    <div className="wrap">
      <Header></Header>
      <MbHeader></MbHeader>
      <Main></Main>
      <Footer></Footer>
    </div>
  </>
);
