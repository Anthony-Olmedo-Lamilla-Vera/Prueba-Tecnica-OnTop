import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Details";
import Page_404 from "./Pages/Page_404";
import Header from "./components/Header";
import Loyaut from "./components/Loyaut";
function App() {
  return (
    <Loyaut>
      <Header />

      <Routes>
        <Route path="*" element={<Page_404 />} caseSensitive />
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Loyaut>
  );
}

export default App;
