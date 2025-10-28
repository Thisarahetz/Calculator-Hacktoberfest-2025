"use client";

import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="foot">
      <p className="lastpara">Copyright &copy; 2022. All Rights Reserved.</p>
      <br />
      <div>
        <p>
          <FaInstagram
            style={{ cursor: "pointer", margin: "0 5px", display: "inline" }}
          />
          <FaTwitter
            style={{ cursor: "pointer", margin: "0 5px", display: "inline" }}
          />
          <FaGithub
            style={{ cursor: "pointer", margin: "0 5px", display: "inline" }}
          />
        </p>
      </div>
    </footer>
  );
}
