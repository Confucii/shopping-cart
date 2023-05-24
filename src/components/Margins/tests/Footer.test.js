import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("Renders correct footer", () => {
    render(<Footer />);
    expect(screen.getByText(/made/i).textContent).toMatch(/made by confucii/i);
  });
});
