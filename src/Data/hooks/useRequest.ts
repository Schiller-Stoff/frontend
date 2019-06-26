import { useState, useEffect } from "react";
import { EndpointUrl } from "../EndpointUrl";
import { FAKE_USER_RESPONSE } from "../constants";

export const useRequest = <ResponseType extends {}>(endpointUrl: EndpointUrl) => {
  const [response, setResponse] = useState<null | ResponseType>(null);
  useEffect(() => {
    setTimeout(
      () =>
        setResponse((endpointUrl === EndpointUrl.User ? FAKE_USER_RESPONSE : {}) as ResponseType),
      2000
    );
  });
  return response;
};
