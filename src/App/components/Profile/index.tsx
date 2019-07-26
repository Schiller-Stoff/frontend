import { useUserData } from "Data/hooks/useUserData";
import React from "react";
import { FormattedMessage } from "react-intl";
import { messages } from "./messages";
import WidgetGrid from "Common/components/WidgetGrid/";
import Spinner from "Common/components/PageTransition/Spinner";

const Profile: React.FC = () => {
  const userData = useUserData();
  return (
    <div className="container">
      <h3 className="title">User Profile</h3>
      {userData ? (
        <>
          <div>
            <WidgetGrid></WidgetGrid>
          </div>

          <div>
            <FormattedMessage {...messages.name} />: {userData.username}
          </div>
          <div>
            <FormattedMessage {...messages.email} />: {userData.email}
          </div>
        </>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default Profile;
