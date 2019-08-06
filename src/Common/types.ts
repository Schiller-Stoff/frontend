import { Url } from "./Url";

export type NavbarMenuContent = Array<NavbarMenuItem | [string, NavbarMenuItem[]]>;

export type NavbarMenuItem = [Url, string];

export type StringArray = Array<string | null | undefined>;

export type WidgetCardObj = {
  classes?: Array<string>;
  backgrColor?: string;
  visible?: boolean;
  key: number;
  frontContent?: JSX.Element | HTMLElement;
  backContent?: JSX.Element | HTMLElement;
};
