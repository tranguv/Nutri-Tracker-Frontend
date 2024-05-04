import React from "react";
import renderer from "react-test-renderer";
import DailyTask from "./DailyTask";
import '@testing-library/jest-dom';


jest.mock("../TaskName/TaskName", () => "MockedTaskName");
jest.mock("../CheckBar/CheckBar", () => "MockedCheckBar");

describe("DailyTask component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<DailyTask />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
