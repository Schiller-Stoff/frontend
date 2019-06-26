import { EndpointUrl } from "Data/EndpointUrl";
import { UserData, UserResponse } from "Data/types";
import { useEffect, useState } from "react";
import { useRequest } from "./useRequest";

export const useUserData = () => {
  const response = useRequest<UserResponse>(EndpointUrl.User);
  const [userData, setUserData] = useState<null | UserData>(null);

  useEffect(() => {
    if (response) {
      setUserData({ email: response.email, username: response.userName });
    }
  }, [response]);

  return userData;
};
