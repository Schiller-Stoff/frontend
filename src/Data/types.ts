import { FAKE_USER_RESPONSE } from "./constants";

export type UserResponse = typeof FAKE_USER_RESPONSE;

export interface UserData {
  username: string;
  email: string;
}
