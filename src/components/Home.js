import React from "react";
import Notes from "./Notes";

const Home = (prop) => {
  const { showAlert } = prop;
  return (
    <>
      <Notes showAlert={showAlert} />
    </>
  );
};

export default Home;
