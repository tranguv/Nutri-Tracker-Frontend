import React from "react";
import renderer from "react-test-renderer";
import TaskName from "./TaskName";
import '@testing-library/jest-dom';

// Mocking the homeIcon image import
jest.mock("../../assets/homeIcon.jpg", () => "mocked-homeIcon.jpg");

describe("TaskName component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<TaskName currentTask={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
