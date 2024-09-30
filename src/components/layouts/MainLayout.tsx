import { Outlet } from "react-router-dom";
import Header from "../ui/home/Header";
import Footer from "../ui/home/Footer";
import { useAppSelector } from "../../redux/hooks";
import usePageLeaveWarning from "../../utils/usePageLeaveWarning";


const MainLayout = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const shouldWarn = cart.length > 0;

  usePageLeaveWarning(shouldWarn);
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;