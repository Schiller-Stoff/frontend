import React from "react";

interface Props {
  displayFront: boolean;
}

const AddDataCard: React.FC<Props> = ({ displayFront }) => {
  return displayFront ? (
    <div>
      <br />
      <i className="fas fa-database" style={{ fontSize: "4em", color: "#26547C" }}></i>{" "}
      {/*TODO: Remove inline style */}
      <br></br>
      <p>Add Data</p>
    </div>
  ) : (
    <div></div>
  );
};

export default AddDataCard;
