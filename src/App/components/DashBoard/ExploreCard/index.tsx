import React from "react";

interface Props {
  displayFront: boolean;
}

const AccountCard: React.FC<Props> = ({ displayFront }) => {
  return displayFront ? (
    <div>
      <br />
      <i className="fas fa-route" style={{ fontSize: "4em", color: "lightgrey" }}></i>{" "}
      {/*TODO: Remove inline style */}
      <br></br>
      <p>Explore</p>
    </div>
  ) : (
    <div>
      <br></br>
      <p></p>
      <p></p>
    </div>
  );
};

export default AccountCard;
