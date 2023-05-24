/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import Shop from "../Shop";
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

describe("Shop", () => {
  it("Shop is generated", () => {
    const shop = renderer
      .create(
        <BrowserRouter>
          <Shop
            addItem={addItem}
            cart={cart}
            changeItemCount={changeItemCount}
          />
        </BrowserRouter>
      )
      .toJSON();
    expect(shop).toMatchSnapshot();
  });

  it("Products can be added to cart", () => {
    cart = [];
    render(
      <BrowserRouter>
        <Shop addItem={addItem} cart={cart} changeItemCount={changeItemCount} />
      </BrowserRouter>
    );
    const buttons = screen.getAllByRole("button", { name: "Add to cart" });
    userEvent.click(buttons[0]);
    userEvent.click(buttons[3]);
    expect(cart.length).toBe(2);
  });

  it("Product count can be increased", () => {
    cart = [{ id: 1, count: 1 }];
    render(
      <BrowserRouter>
        <Shop addItem={addItem} cart={cart} changeItemCount={changeItemCount} />
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: "+" });

    userEvent.click(button);
    userEvent.click(button);

    expect(cart[0].count).toBe(3);
  });

  it("Products that are already added can be removed", () => {
    cart = [{ id: 1, count: 1 }];
    render(
      <BrowserRouter>
        <Shop addItem={addItem} cart={cart} changeItemCount={changeItemCount} />
      </BrowserRouter>
    );
    const button = screen.getByRole("button", { name: "-" });

    userEvent.click(button);

    expect(cart.length).toBe(0);
  });

  it("Filter can be applied", () => {
    cart = [];
    render(
      <BrowserRouter>
        <Shop addItem={addItem} cart={cart} changeItemCount={changeItemCount} />
      </BrowserRouter>
    );

    const filterBtn = screen.getByText("Black");
    act(() => {
      userEvent.click(filterBtn);
    });
    const imgs = screen.getAllByRole("img");

    expect(imgs.length).toBe(2);
  });

  it("Filter can be applied and removed", () => {
    cart = [];
    render(
      <BrowserRouter>
        <Shop addItem={addItem} cart={cart} changeItemCount={changeItemCount} />
      </BrowserRouter>
    );

    const filterBtn = screen.getByText("Black");
    act(() => {
      userEvent.click(filterBtn);
      userEvent.click(filterBtn);
    });
    const imgs = screen.getAllByRole("img");

    expect(imgs.length).toBe(8);
  });

  it("Search can be applied", () => {
    cart = [];
    render(
      <BrowserRouter>
        <Shop addItem={addItem} cart={cart} changeItemCount={changeItemCount} />
      </BrowserRouter>
    );

    const searchBox = screen.getByRole("textbox");
    act(() => {
      userEvent.type(searchBox, "Ember");
    });
    const imgs = screen.getAllByRole("img");

    expect(imgs.length).toBe(1);
  });

  it("Search can be cleaned", () => {
    cart = [];
    render(
      <BrowserRouter>
        <Shop addItem={addItem} cart={cart} changeItemCount={changeItemCount} />
      </BrowserRouter>
    );

    const searchBox = screen.getByRole("textbox");
    act(() => {
      userEvent.type(searchBox, "Ember");
      userEvent.clear(searchBox);
    });
    const imgs = screen.getAllByRole("img");

    expect(imgs.length).toBe(8);
  });

  it("Search and filter can be applied", () => {
    cart = [];
    render(
      <BrowserRouter>
        <Shop addItem={addItem} cart={cart} changeItemCount={changeItemCount} />
      </BrowserRouter>
    );

    const filterBtn = screen.getByText("Black");
    const searchBox = screen.getByRole("textbox");

    act(() => {
      userEvent.click(filterBtn);
      userEvent.type(searchBox, "Shining");
    });
    const imgs = screen.getAllByRole("img");

    expect(imgs.length).toBe(1);
  });
});
