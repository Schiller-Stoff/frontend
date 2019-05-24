import React from "react";
import Title from "Common/components/Title";
import { messages } from "./messages";
import { useFormatMessage } from "Common/reactIntl";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Url } from "Common/Url";

const NoMatch: React.FC = () => {
  const t = useFormatMessage();
  return (
    <>
      <Title title={t(messages.title)} subtitle={t(messages.text)} />
      <Link to={Url.Home}>
        <FormattedMessage {...messages.linkText} />
      </Link>
    </>
  );
};

export default NoMatch;
