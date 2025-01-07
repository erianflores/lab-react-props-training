import React from "react";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="idCardContainer">
      <img
        className="idCardImage"
        src={picture}
        alt={`${firstName} ${lastName}`}
      />
      <div className="idCardDetails">
        <p>
          <strong>First Name:</strong> {firstName}
        </p>
        <p>
          <strong>Last Name:</strong> {lastName}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
        <p>
          <strong>Height:</strong> {height} cm
        </p>
        <p>
          <strong>Birth:</strong> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
