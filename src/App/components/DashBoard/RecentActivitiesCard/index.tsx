import React from "react";

interface Props {
  displayFront: boolean;
}

const RecentActivitiesCard: React.FC<Props> = ({ displayFront }) => {
  return displayFront ? (
    <div>
      <br></br>
      <br></br>
      <i className="fas fa-clipboard-list" style={{ fontSize: "7em", color: "lightgrey" }}></i>{" "}
      {/*TODO:Remove inline style! */}
      <br></br>
      <p>Recent Activities</p>
    </div>
  ) : (
    <div>
      <br></br>
      <ul>
        <li>Searched for: XYZ</li>
      </ul>
    </div>
  );
};

export default RecentActivitiesCard;
