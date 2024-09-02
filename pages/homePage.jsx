import NavbarApp from "../components/navbar";
import Product from "../components/product";
import "../src/assets/stylesheet/homepage.css";
const HomePage = () => {
  return (
    <div className="container">
      <NavbarApp />
      <Product />
    </div>
  );
};
export default HomePage;
