import { Url } from "./Url";

export type MenuItem = [Url, string];

export type NavbarMenuContent = Array<MenuItem | [string, MenuItem[]]>;
