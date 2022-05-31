import React from "react";

function Header() {
  const handleClick = () => {
    const droppingButtons = document.querySelector(".nav-left");
    if (droppingButtons.className === "nav-left") {
      droppingButtons.classList += " dropdown";
    } else {
      droppingButtons.classList = "nav-left";
    }
  };
  return (
    <nav>
      <div className="nav-left">
        <button className="drop">
          <a href="#front">
            {" "}
            <h2>czechaj</h2>
          </a>
        </button>
        <button className="drop downsize">
          <a href="#frontendProjects">Front-End-Projects</a>
        </button>
        <button className="drop downsize">
          <a href="#backendProjects">Back-End Projects</a>
        </button>
        <button className="drop downsize">
          <a href="#skills">Skills</a>
        </button>
        <button className="drop downsize">
          <a href="#certificates">Certificates</a>
        </button>
        <button onClick={handleClick} className="responsive">
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </button>
      </div>
      <ul>
        <li>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://github.com/czechaj"
          >
            {" "}
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.linkedin.com/in/cevdet-ziya-erdogan"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li>
          <a rel="noreferrer" target={"_top"} href="mailto:cz1e4md@gmail.com">
            <ion-icon name="mail"></ion-icon>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default React.memo(Header);
