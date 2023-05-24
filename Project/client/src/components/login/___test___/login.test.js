import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./Login.js";

describe("LoginForm Component", () => {
  beforeEach(() => {
    // Mock localStorage methods
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
      },
      writable: true,
    });
  });

  test("renders login form", () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("handles form submission", async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const loginButton = screen.getByRole("button", { name: "Login" });

    // Fill in form inputs
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    // Mock the fetch request
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({}),
    });

    // Submit the form
    fireEvent.click(loginButton);

    // Wait for the redirect or any other desired behavior
  });

  test("redirects to register page", () => {
    render(<LoginForm />);

    const registerButton = screen.getByRole("button", { name: "Register" });
    fireEvent.click(registerButton);

    // Check if the component redirected to the register page
    expect(window.location.href).toContain("/register");
  });
});
