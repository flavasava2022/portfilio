import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="min-h-[80vh] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
