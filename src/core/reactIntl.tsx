import * as React from "react";
import { useContext } from "react";
import { InjectedIntl, injectIntl } from "react-intl";

export const IntlContext = React.createContext<InjectedIntl>({} as InjectedIntl);

// turn the old context into the new context
export const InjectIntlContext = injectIntl(({ intl, children }) => {
  return <IntlContext.Provider value={intl}>{children}</IntlContext.Provider>;
});

// the format message hook
export const useFormatMessage = () => {
  const intl = useContext(IntlContext);
  return intl.formatMessage;
};
