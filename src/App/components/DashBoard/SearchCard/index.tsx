import React from "react";

interface Props {
  displayFront: boolean;
}

const SearchCard: React.FC<Props> = ({ displayFront }) => {
  return displayFront ? (
    <div>
      <br />
      <br></br>
      <i className="fas fa-search" style={{ fontSize: "7em", color: "#EF476F" }}></i>{" "}
      {/*TODO: Remove inline style */}
      <br></br>
      <p>Perform Search</p>
    </div>
  ) : (
    <div></div>
  );
};

export default SearchCard;
