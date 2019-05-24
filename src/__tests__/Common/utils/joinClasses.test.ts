import { joinClasses } from "Common/utils/joinClasses";

test("Correctly join provided class names.", () => {
  const container = "container";
  expect(joinClasses(container, undefined, "", "main")).toBe("container main");
});
