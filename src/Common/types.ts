import { Url } from "./Url";

export type NavbarMenuContent = Array<NavbarMenuItem | [string, NavbarMenuItem[]]>;

export type NavbarMenuItem = [Url, string];

export type StringArray = Array<string | null | undefined>;

export type WidgetCardObj = {
  classes?: Array<string>;
  backgrColor?: string;
  visible?: boolean;
  orderNumber?: number;
  flipCard?: Function;
  frontContent?: JSX.Element | HTMLElement;
  backContent?: JSX.Element | HTMLElement;
};
