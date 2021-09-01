import React from "react";
import "./header.scss";

function Header({ lessonTitle }) {
  const title = "AlgaWorks";
  return (
    <header>
      <h1>{title}</h1>
      <span>{lessonTitle}</span>
    </header>
  );
}

export default Header;
