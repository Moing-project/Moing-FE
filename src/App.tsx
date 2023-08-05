import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layoutComponents/Layout";
import Rending from "./pageComponents/Rending";
import Main from "./pageComponents/Main";
import Projects from "./pageComponents/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Rending />} />
        <Route path="main" element={<Main />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
