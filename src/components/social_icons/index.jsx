import React from "react";
import "./style.scss";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        <li>
          <a href="https://twitter.com/Elessar551">
            <FaTwitter />
          </a>
        </li>

        <li>
          <a href="https://github.com/Elessar55">
            <FaGithub />
          </a>
        </li>

        <li>
          <a href="https://www.facebook.com/ruturaj551">
            <FaFacebookF />
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/ruturaj-patil551/">
            <FaLinkedin />
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com/channel/UCoaL6zw0sNyIRmKgCEYKQcw">
            <FaYoutube />
          </a>
        </li>
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
