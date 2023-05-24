import React from "react";
import renderer from "react-test-renderer";
import Home from "../Home";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("renders correct number", () => {
    const home = renderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      .toJSON();
    expect(home).toMatchSnapshot();
  });
});
