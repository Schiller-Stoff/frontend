import { useUserData } from "Data/hooks/useUserData";
import React from "react";

const Profile: React.FC = () => {
  const userData = useUserData();
  return (
    <div>
      {userData ? (
        <>
          <div>name: {userData.username}</div>
          <div>email: {userData.email}</div>
        </>
      ) : (
        "fake-spinner"
      )}
    </div>
  );
};

export default Profile;
