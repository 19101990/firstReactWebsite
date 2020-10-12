import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Social() {
  return (
    <>
      <div className="social">
        <a
          href="https://www.instagram.com/fizjotrener.igor_kielbowski/"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <a
          href="https://www.facebook.com/fizjotrenerigor_kielbasky-110239757061555/"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a>
      </div>
    </>
  );
}

export default Social;
