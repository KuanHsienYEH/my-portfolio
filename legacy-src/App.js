import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage";
import { Route, Routes } from "react-router-dom";
import "./styles/Init.css";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/my-portfolio" element={<Homepage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
