import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  it("Renders correct number", () => {
    render(
      <BrowserRouter>
        <Header cart={[{ count: 3 }, { count: 2 }]} />
      </BrowserRouter>
    );
    expect(screen.queryByTestId("cart-num").textContent).toMatch(/5/);
  });

  it("Does not render cart num", () => {
    render(
      <BrowserRouter>
        <Header cart={[]} />
      </BrowserRouter>
    );
    expect(screen.queryByTestId("cart-num").textContent).toMatch("");
  });
});
