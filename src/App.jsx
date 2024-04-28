import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Daily from "./pages/Daily";
import Search from "./pages/Search";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {

  return (
    <main>
      <Navbar />
      <div id="display-container">
        <div id="nav-block" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
