import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

describe("Header Component Test Cases", () => {
  it("Should Load Login Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
  it("Should Load Login Button with Cart Item 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const cartItem = screen.getByText("Cart (0 items)");
    expect(cartItem).toBeInTheDocument();
  });
  it("Should Load Login Button with Cart Item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
  });
  it("Should Load Login Button with Cart Item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );

    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
  });
});
