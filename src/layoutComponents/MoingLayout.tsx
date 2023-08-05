import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function MoingLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
