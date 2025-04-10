// react is added 
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const headers = screen.getAllByText(/delicious recipes/i);
  expect(headers.length).toBeGreaterThan(0);
});
