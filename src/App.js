import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import LoginLoadingPage from "./pages/auth/LoginLoadingPage";
import RegisterPage from "./pages/auth/RegisterPage";
import MapPage from "./pages/map/MapPage";
import MainPage from "./pages/main/MainPage";
import PloggingListPage from "./pages/list/PloggingListPage";
import FilterSelectPage from "./pages/list/FilterSelectPage";
import MyPage from "./pages/user/MyPage";
import EditPage from "./pages/user/EditPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/loading" element={<LoginLoadingPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/map" element={<MapPage />} />

        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<PloggingListPage />} />
        <Route path="/list/filters" element={<FilterSelectPage />} />

        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
