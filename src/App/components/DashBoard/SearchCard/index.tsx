import React from "react";

interface Props {
  displayFront: boolean;
}

const SearchCard: React.FC<Props> = ({ displayFront }) => {
  return displayFront ? (
    <div>
      <br />
      <i className="fas fa-search" style={{ fontSize: "4em", color: "#EF476F" }}></i>{" "}
      {/*TODO: Remove inline style */}
      <br></br>
      <p>Perform Search</p>
    </div>
  ) : (
    <div>
      <br></br>
      <input className="input" type="text" placeholder="Person" style={{ width: "50%" }}></input>
    </div>
  );
};

export default SearchCard;
