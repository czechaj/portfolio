import React from "react";

function Header() {
  return (
    <nav>
      <div>
        <button>
          <h2>czechaj</h2>
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
          <a rel="noreferrer" target={"_blank"} href="https://google.com">
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
