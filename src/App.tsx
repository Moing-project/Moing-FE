import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./layout/Footer";
import HeaderWithoutToken from "./layout/HeaderWithoutToken";
import HeaderWithToken from "./layout/HeaderWithToken";
import Rending from "./page/Rending/Rending";
import Main from "./page/Main";
import Projects from "./page/Projects/Projects";
import NotFound from "./page/NotFound";
import SignIn from "./page/SignIn/SignIn";
import Login from "./page/Login/Login";
import SignInDone from "./page/SignInDone";
import ProjectCreate from "./page/ProjectCreate/ProjectCreate";
import ProjectDetail from "./page/ProjectDetails/ProjectDetail";

function App() {
  const [hasToken, setHasToken] = useState(false);
  const location = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    if (localStorage.getItem("Authorization") === null) {
      setHasToken(false);
    } else {
      setHasToken(true);
    }
  }, []);

  // 랜딩 페이지의 경로에 따라 헤더를 렌더링하거나 생략
  const isRenderingPage = location.pathname === "/";

  return (
    <>
      {/* 랜딩 페이지에서 헤더를 생략 */}
      {isRenderingPage ? null : hasToken ? (
        <HeaderWithToken hasToken={hasToken} setHasToken={setHasToken} />
      ) : (
        <HeaderWithoutToken />
      )}
      <Routes>
        <Route
          path="/"
          element={<Rending hasToken={hasToken} setHasToken={setHasToken} />}
        />
        <Route path="/main" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/create" element={<ProjectCreate />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin/done" element={<SignInDone />} />
        <Route path="/login" element={<Login />} />
        {/* 상단에 위치하는 라우트들의 규칙 중 일치하는 라우트가 없다면 아래가 화면에 나타남 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* 루트 경로에서 푸터를 생략 */}
      {window.location.pathname === "/" ? null : <Footer />}
    </>
  );
}

export default App;
