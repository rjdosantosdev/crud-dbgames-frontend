import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import GamesList from "./components/GamesList/GamesList";
import NotFound from "./components/NotFound/NotFound";
import HomePage from "./components/HomePage/HomePage";
// CSS
import style from "./App.module.css";

function App() {
  return (
    <BrowserRouter className={style.body}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="games" element={<GamesList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
