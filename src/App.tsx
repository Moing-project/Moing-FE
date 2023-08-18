import { Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Rending from "./page/Rending/Rending";
import Main from "./page/Main";
import Projects from "./page/Projects/Main/Projects";
import NotFound from "./page/NotFound";
import SignIn from "./page/SignIn/SignIn";
import Login from "./page/Login/Login";
import { MarginLayout } from "./styledComponents/commons/commonStyle";
import SignInDone from "./page/SignIn/SignInDone";
import ProjectsMake from "./page/Projects/ProjectsMake";

function App() {
  return (
    <>
      <Header />
      <MarginLayout>
        <Routes>
          <Route path="/" element={<Rending />} />
          <Route path="/main" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/make" element={<ProjectsMake />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signin/done" element={<SignInDone />} />
          <Route path="/login" element={<Login />} />
          {/* 상단에 위치하는 라우트들의 규칙 중 일치하는 라우트가 없다면 아래가 화면에 나타남 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </MarginLayout>
      <Footer />
    </>
  );
}

export default App;
