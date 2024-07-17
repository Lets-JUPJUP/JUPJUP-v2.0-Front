import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import LoginLoadingPage from "./pages/auth/LoginLoadingPage";
import RegisterPage from "./pages/auth/RegisterPage";
import MapPage from "./pages/map/MapPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/loading" element={<LoginLoadingPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/map" element={<MapPage />} />
      </Routes>
    </div>
  );
}

export default App;
