import React, { createElement } from "react";
import { joinClasses } from "Common/utils/joinClasses";

interface Props {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  subtitle?: string;
  title: string;
}

const Title: React.FC<Props> = ({ level = 1, subtitle, title }) => {
  const subtitleLevel = level > 3 ? 6 : level + 2;
  return (
    <>
      {createElement(`h${level}`, {
        className: joinClasses("title", `is-${level}`),
        children: title
      })}
      {createElement(`p`, {
        className: joinClasses("subtitle", `is-${subtitleLevel}`),
        children: subtitle
      })}
    </>
  );
};

export default Title;
