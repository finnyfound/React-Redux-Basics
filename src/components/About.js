import React from "react";
import Rainbow from "./hoc/rainbow";
const About = (props) => {
  console.log(props);
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit aperiam sequi incidunt veritatis ex similique architecto quidem quibusdam autem nobis. Quia quo et, a eveniet qui itaque. Vero, unde doloremque.</p>
    </div>
  );
};

export default Rainbow(About);
