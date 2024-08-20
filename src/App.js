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
import DetailPage from "./pages/post/DetailPage";
import NotiPage from "./pages/user/NotiPage";
import UserProfile from "./pages/user/UserProfile";
import SavedList from "./pages/user/SavedList";
import ReviewPage from "./pages/user/ReviewPage";
import AlertPage from "./pages/user/AlertPage";
import WritePage from "./pages/post/WritePage";
import WritePage2 from "./pages/post/WritePage2";
import { PrivateRoute, PrivateRouteTemp } from "./services/router/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute />}>
          {/*로그인 시 접근 가능한 페이지 */}
          <Route path="/map" element={<MapPage />} />

          <Route path="/" element={<MainPage />} />
          <Route path="/list" element={<PloggingListPage />} />
          <Route path="/list/filters" element={<FilterSelectPage />} />

          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/write/1" element={<WritePage />} />
          <Route path="/write/2" element={<WritePage2 />} />

          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/edit" element={<EditPage />} />
          <Route path="/mypage/noti" element={<NotiPage />} />
          <Route path="/mypage/myplogging" element={<SavedList TYPE={"A"} />} />
          <Route path="/mypage/bookmark" element={<SavedList TYPE={"B"} />} />
          <Route path="/mypage/comment" element={<SavedList TYPE={"C"} />} />
          <Route path="/mypage/review/:id" element={<ReviewPage />} />

          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/user/:id/alert" element={<AlertPage />} />
        </Route>

        <Route element={<PrivateRouteTemp />}>
          {/*회원가입 중도 이탈자 & 회원가입 진행중인 유저만 접근 가능한 페이지 */}
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/loading" element={<LoginLoadingPage />} />
      </Routes>
    </div>
  );
}

export default App;
