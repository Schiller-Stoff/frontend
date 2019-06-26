import { useEffect, useState } from "react";
import { FAKE_USER_RESPONSE } from "../constants";
import { EndpointUrl } from "../EndpointUrl";

export const useRequest = <ResponseType extends {}>(endpointUrl: EndpointUrl) => {
  const [response, setResponse] = useState<null | ResponseType>(null);
  useEffect(() => {
    setTimeout(
      () =>
        setResponse((endpointUrl === EndpointUrl.User ? FAKE_USER_RESPONSE : {}) as ResponseType),
      2000
    );
  }, [endpointUrl]);
  return response;
};
