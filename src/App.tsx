import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layoutComponents/Footer";
import Header from "./layoutComponents/Header";
import Rending from "./pageComponents/Rending";
import Main from "./pageComponents/Main";
import Projects from "./pageComponents/Projects";
import NotFound from "./pageComponents/NotFound";
import SignIn from "./pageComponents/SignIn";
import Login from "./pageComponents/Login";

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
