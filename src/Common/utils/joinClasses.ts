import { StringArray } from "Common/types";

export const joinClasses = (...classNames: StringArray) => {
  if (!classNames || classNames.length === 0) {
    return;
  }
  const notEmpty: string[] = [];
  for (let i = 0, length = classNames.length; i < length; i++) {
    const name = classNames[i];
    if (typeof name === "string" && name.length > 0) {
      notEmpty.push(name);
    }
  }
  return notEmpty.join(" ");
};
