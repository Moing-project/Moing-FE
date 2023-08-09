import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Rending from "./page/Rending/Rending";
import Main from "./page/Main";
import Projects from "./page/Projects";
import NotFound from "./page/NotFound";
import SignIn from "./page/SignIn/SignIn";
import Login from "./page/Login/Login";
=======
import Footer from "./layoutComponents/Footer";
import Header from "./layoutComponents/Header";
import Rending from "./pageComponents/Rending";
import Main from "./pageComponents/Main";
import Projects from "./pageComponents/Projects";
import NotFound from "./pageComponents/NotFound";
<<<<<<< HEAD
import SignIn from "./pageComponents/SignIn";
import Login from "./pageComponents/Login";
>>>>>>> fec5d28 ([add] 회원가입 틀 완성, 폰트 적용)
=======
import SignIn from "./pageComponents/SignIn/SignIn";
import Login from "./pageComponents/Login/Login";
>>>>>>> 087cd96 ([add, modify] 로그인 페이지 아이콘 파일 분리, 로그인 폼 컴포넌트 분리/ 로그인 페이지 이메일 유효성 검사 공백 허용, border 수정)

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Rending />} />
        <Route path="/main" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        {/* 상단에 위치하는 라우트들의 규칙 중 일치하는 라우트가 없다면 아래가 화면에 나타남 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
