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
    <div>
      <br></br>
      <br></br>
      <p>Search for person:</p>
      <input
        className="input"
        type="text"
        placeholder="Text input"
        style={{ width: "50%" }}
      ></input>
    </div>
  );
};

export default SearchCard;
