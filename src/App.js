import logo from "./logo.svg";
import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import { BrowserRouter, Route, Link } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className=""></div>
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background"></div>
    </div>
    </BrowserRouter>
  );
}

export default App;
