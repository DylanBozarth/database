import React from "react";

export default function Card(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.imgUrl})`
      }}
      className="card gradient-border container-fluid"
    >
      <div className="card-info">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-description">{props.description}</p>
        <div className="card-waves" />
      </div>
    </div>
  );
}