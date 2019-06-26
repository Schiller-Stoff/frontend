import { useUserData } from "Data/hooks/useUserData";
import React from "react";
import { FormattedMessage } from "react-intl";
import { messages } from "./messages";

const Profile: React.FC = () => {
  const userData = useUserData();
  return (
    <div>
      {userData ? (
        <>
          <div>
            <FormattedMessage {...messages.name} />: {userData.username}
          </div>
          <div>
            <FormattedMessage {...messages.email} />: {userData.email}
          </div>
        </>
      ) : (
        "fake-spinner"
      )}
    </div>
  );
};

export default Profile;
