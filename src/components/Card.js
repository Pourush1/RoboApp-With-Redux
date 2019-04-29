import React from "react";

const Card = props => {
  //Destructuring the props
  const { name, email, id } = props;
  return (
    // this is jsx
    //using tachyons class here
    <div
      className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
      id="cardComponent"
    >
      <img
        id="robotImage"
        alt="robots"
        src={`https://robohash.org/${id}?size=200x200`}
      />
      <div id="nameEmail">
        <h2 id="name">{name} </h2>
        <p id="email">{email}</p>
        {/* <h1>{name}</h1> */}
      </div>
    </div>
  );
};

export default Card;
