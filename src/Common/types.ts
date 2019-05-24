import { Url } from "./Url";

export type NavbarMenuContent = Array<NavbarMenuItem | [string, NavbarMenuItem[]]>;

export type NavbarMenuItem = [Url, string];

export type StringArray = Array<string | null | undefined>;
