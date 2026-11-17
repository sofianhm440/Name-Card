import "./App.css";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <div className="profile">
        <div className="header">
          <img src="/profile.jpeg" alt="profile" />
          <div className="sosmed">
            {/* <a href="#">
              {" "}
              <FaFacebook />{" "}
            </a> */}
            <a
              href="https://www.instagram.com/yaanpian?stkn=M2V3MXZiNHJtYjVz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaInstagram />{" "}
            </a>
            {/* <a href="#">
              {" "}
              <FaTwitter />{" "}
            </a> */}
          </div>

          <div className="sosmed2">
            <a href="#">
              {" "}
              <FaLinkedin />{" "}
            </a>
            <a
              href="https://github.com/sofianhm440"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaGithub />{" "}
            </a>
          </div>
          <div className="title">
            <h2>Sofyan Hidayat. M</h2>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div className="content">
          <h3>About Me</h3>
          <p>Hello! My name is Pian and I am a Frontend Developer.</p>

          <p>
            I love building websites, learning new technologies, and exploring
            programming.
          </p>
          <div className="skills">
            <span>React JS</span>
            <span>Frontend</span>
            <span>JavaScript</span>
          </div>
          <div className="contact">
            {/* <p>📧 sofyanhidayatmakau@gmail.com</p> */}
            <p>📍 Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
