import React from "react";
import { render, screen } from "@testing-library/react";
import ItemCard from "../ItemCard";
import { useParams } from "react-router-dom";
import userEvent from "@testing-library/user-event";

let cart = [];

function addItem(newItem) {
  const index = cart.findIndex((item) => item.id === newItem.id);
  if (index >= 0) {
    const newCart = [...cart];
    newCart[index].count += 1;
    cart = [...newCart];
  } else {
    cart = [...cart, { id: newItem.id, count: 1 }];
  }
}

function removeItem(deleteItem) {
  cart = cart.filter((item) => item.id !== deleteItem.id);
}

function changeItemCount(changeItem, count) {
  if (count < 1) {
    removeItem(changeItem);
  } else {
    const index = cart.findIndex((item) => item.id === changeItem.id);
    const newCart = [...cart];
    newCart[index].count = count;
    cart = [...newCart];
  }
}

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("Item Card", () => {
  it("Correct item card is generated", () => {
    useParams.mockReturnValue({ id: "1" });
    render(
      <ItemCard
        addItem={addItem}
        cart={cart}
        changeItemCount={changeItemCount}
      />
    );
    expect(screen.getByText(/ember/i).textContent).toMatch(/Ember Destroyer/i);
  });

  it("Button adds to cart", () => {
    cart = [];
    useParams.mockReturnValue({ id: "1" });
    render(
      <ItemCard
        addItem={addItem}
        cart={cart}
        changeItemCount={changeItemCount}
      />
    );
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(cart[0].count).toBe(1);
  });

  it("Product count can be increased", () => {
    cart = [{ id: 1, count: 1 }];
    useParams.mockReturnValue({ id: "1" });
    render(
      <ItemCard
        addItem={addItem}
        cart={cart}
        changeItemCount={changeItemCount}
      />
    );
    const plusButton = screen.getByRole("button", { name: "+" });
    userEvent.click(plusButton);
    expect(cart[0].count).toBe(2);
  });

  it("Product count can be decreased", () => {
    cart = [{ id: 1, count: 1 }];
    useParams.mockReturnValue({ id: "1" });
    render(
      <ItemCard
        addItem={addItem}
        cart={cart}
        changeItemCount={changeItemCount}
      />
    );
    const minusButton = screen.getByRole("button", { name: "-" });
    userEvent.click(minusButton);
    expect(cart.length).toBe(0);
  });
});
