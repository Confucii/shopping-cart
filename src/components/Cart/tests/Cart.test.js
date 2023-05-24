/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-test-renderer";

let cart = [];

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

function clearCart() {
  cart = [];
}

describe("Cart", () => {
  it("Products can be purchased", () => {
    cart = [
      { id: 1, count: 2 },
      { id: 2, count: 1 },
    ];
    render(
      <BrowserRouter>
        <Cart
          cart={cart}
          clearCart={clearCart}
          changeItemCount={changeItemCount}
        />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: "Checkout" });
    act(() => {
      userEvent.click(button);
    });

    expect(cart.length).toBe(0);
  });

  it("Product can be removed from cart", () => {
    cart = [
      { id: 1, count: 2 },
      { id: 2, count: 1 },
    ];
    render(
      <BrowserRouter>
        <Cart
          cart={cart}
          clearCart={clearCart}
          changeItemCount={changeItemCount}
        />
      </BrowserRouter>
    );

    const buttons = screen.getAllByRole("button", { name: "-" });
    act(() => {
      userEvent.click(buttons[1]);
    });

    expect(cart.length).toBe(1);
  });

  it("Product number can be increased", () => {
    cart = [
      { id: 1, count: 2 },
      { id: 2, count: 1 },
    ];
    render(
      <BrowserRouter>
        <Cart
          cart={cart}
          clearCart={clearCart}
          changeItemCount={changeItemCount}
        />
      </BrowserRouter>
    );

    const buttons = screen.getAllByRole("button", { name: "+" });
    act(() => {
      userEvent.click(buttons[1]);
    });

    expect(cart[1].count).toBe(2);
  });

  it("Sum is calculated", () => {
    cart = [
      { id: 1, count: 2 },
      { id: 2, count: 1 },
    ];
    render(
      <BrowserRouter>
        <Cart
          cart={cart}
          clearCart={clearCart}
          changeItemCount={changeItemCount}
        />
      </BrowserRouter>
    );

    const sum = screen.getByText(/sum/i);

    expect(sum.textContent).toMatch(/85000/);
  });
});
