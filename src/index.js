import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MbHeader from "./components/MbHeader";
import PopUp from "./components/PopUp";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./css/reset.css";
import "./css/common.css";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Wrap = () => {
  // js 코드 자리
  const [mbMenuOpen, setMbMenuOpen] = useState(false);
  const clickMbbt = () => {
    setMbMenuOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className="wrap">
      <Header clickMbbt={clickMbbt}></Header>
      <MbHeader mbMenuOpen={mbMenuOpen}></MbHeader>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

root.render(
  <>
    <PopUp></PopUp>
    <Wrap></Wrap>
  </>
);
