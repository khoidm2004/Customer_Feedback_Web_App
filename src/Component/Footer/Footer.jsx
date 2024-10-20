import "./Footer.css";
import LogoIspum from "../../Asset/LogoIspum.png";
import { Typography } from "@mui/material";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="Footer_Container">
        <div className="Footer_Info">
          <div className="logo">
            <a href="#">
              <img src={LogoIspum} />
            </a>
          </div>
          <h2>LoremIspum Oy</h2>
          <br />
          <p>
            <span>Email:</span> info.loremispum@lorem.com.fi
          </p>
          <p>
            <span>Address:</span> Pukkerikatu 2A, Lappeenranta, Finland
          </p>
          <div className="Social_Icon">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaEnvelope />
            </a>
            <a href="#">
              <FaPhoneAlt />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="Footer_Solution">
          <h2>Solution</h2>
          <a href="#">Enterprise Resource Planning System - ERP</a>
          <a href="#">Network Infrastructure & Data Center Services</a>
          <a href="#">Cloud Services</a>
        </div>
        <div className="Footer_About">
          <h2>About</h2>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <Typography
        sx={{
          fontSize: "17px",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#bae8e8",
        }}
      >
        Copyright - Author: Khoi Do
      </Typography>
    </>
  );
}
