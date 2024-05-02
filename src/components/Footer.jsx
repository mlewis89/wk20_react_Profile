import gitHubLogo from "../assets/GitHub_Logo.png";
import linkedInLogo from "../assets/LI-Logo.png";
import xLogo from "../assets/x-logo-black.png";

export default function Footer() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div className="container-fluid footer">
      <p>Conect with me via:</p>
      <div className="row">
        <div className="col">
          <a
            href="https://github.com/mlewis89/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-image" src={gitHubLogo} height={25} />
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.linkedin.com/in/mark-lewis-1948b233/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer-image"
              src={linkedInLogo}
              alt="#"
              height={25}
            />
          </a>
        </div>
        <div className="col">
          <a
            href="https://twitter.com/Markdlewis89"
            target="_blank"
            rel="noreferrer"
          >
            <img className="footer-image" src={xLogo} alt="#" height={25} />
            @marklewis89
          </a>
        </div>
      </div>
    </div>
  );
}
