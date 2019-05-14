import { joinClasses } from "core/utils/joinClasses";

test("Correctly join provided class names.", () => {
  const container = "container";
  expect(joinClasses(container, "main")).toBe("container main");
});
