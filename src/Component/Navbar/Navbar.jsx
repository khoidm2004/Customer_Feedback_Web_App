import "./Navbar.css";
import LogoIspum from "../../Asset/LogoIspum.png";

export default function Navbar() {
  return (
    <>
      <div className="Navbar_Container">
        <div className="Logo_Container">
          <a href="#">
            <img src={LogoIspum} />
          </a>
        </div>
        <div className="NavLink_Container">
          <nav>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button>Sign In</button>
            </li>
            <li>
              <button>Register</button>
            </li>
          </nav>
        </div>
      </div>
    </>
  );
}
