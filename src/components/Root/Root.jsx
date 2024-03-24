import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Toaster />
      <Footer />
    </div>
  );
};

export default Root;
