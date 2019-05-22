import React from "react";
import Title from "Core/components/Title";
import { messages } from "./messages";
import { useFormatMessage } from "Core/reactIntl";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Url } from "Core/Url";

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
