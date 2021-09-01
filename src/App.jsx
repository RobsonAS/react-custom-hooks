import React from "react";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import DeepDive from "./components/DeepDive/DeepDive";

import "./styles.css";
import UsersList from "./components/UsersList";

export default function App() {
  return (
    <div className="App">
      <Header lessonTitle={"hooks personalizados"} />
      <Container>
        <DeepDive />
        <UsersList />
        <UsersList />
      </Container>
    </div>
  );
}
