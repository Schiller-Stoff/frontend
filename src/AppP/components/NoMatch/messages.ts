import { defineMessages } from "react-intl";

export const messages = defineMessages({
  text: {
    defaultMessage: "The page you're looking for could not be found.",
    description: "The text of the NoMatch Page",
    id: "NoMatch.Text"
  },
  linkText: {
    defaultMessage: "Return to the home page",
    description: "The text of the NoMatch return-to-home link",
    id: "NoMatch.LinkText"
  },
  title: {
    defaultMessage: "404 – Not found",
    description: "The title of the NoMatch Page",
    id: "NoMatch.Title"
  }
});
