import React from "react";
import ReactDOM from "react-dom";

function Picture(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Picture
      name="Beyonce"
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+1 23 456 789"
      email="beyoonce@gmail.com"
    />
    <Picture
      name="Beyonce"
      src="https://media.npr.org/assets/img/2017/05/26/sherpas-01_custom-e78d8a437667a9f7939c794202c353c9906e9cc8.jpg"
      phone="2018876130"
      email="tsherpa@ramapo.edu"
    />
  </div>,
  document.getElementById("root")
);
