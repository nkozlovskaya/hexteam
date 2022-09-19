import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
  <Routes>
      <Route path="/main" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/hexteam" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
