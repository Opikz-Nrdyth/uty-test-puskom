import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import { useEffect, useState } from "react";
const NavbarApp = () => {
  const [dataBrand, setDataBrand] = useState([]);
  useEffect(() => {
    axios({
      url: `${import.meta.env.VITE_BASEURL}brands`,
      method: "GET",
    }).then((response) => {
      setDataBrand(response.data);
    });
  }, []);

  console.log(dataBrand);

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <h2>Product</h2>
        </div>
        <div className="d-flex align-items-center gap-1 justify-content-end">
          <button
            className="btn btn-sm btn-success h-75"
            style={{ width: "80px" }}
          >
            Sign In
          </button>
        </div>
      </div>
      <ul className="d-flex gap-4">
        <li>
          <a href="/" className="text-decoration-none text-dark">
            All
          </a>
        </li>
        <li>
          <a href="/brand/brand 1" className="text-decoration-none text-dark">
            brand 1
          </a>
        </li>
        <li>
          <a href="/brand/brand 2" className="text-decoration-none text-dark">
            brand 2
          </a>
        </li>
        <li>
          <a href="/brand/brand 3" className="text-decoration-none text-dark">
            brand 3
          </a>
        </li>
        <li>
          <a href="/brand/brand 4" className="text-decoration-none text-dark">
            brand 4
          </a>
        </li>
        <li>
          <a href="/brand/brand 5" className="text-decoration-none text-dark">
            brand 5
          </a>
        </li>
      </ul>
    </div>
  );
};
export default NavbarApp;
