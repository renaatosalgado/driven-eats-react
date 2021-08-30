import ConfirmOrder from "./ConfirmOrder";
import Header from "./Header";
import Menu from "./Menu/Menu";
import Footer from "./Footer";
import "../css/style.css"
import "../css/reset.css"

export default function App() {
  return (
    <div>
      <ConfirmOrder />
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}