import React from "react";
import { screen, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const formTitle = screen.getByTestId("title");
  expect(formTitle).toBeTruthy();
  console.log(formTitle);
});

// test("form shows success message on submit with form details", () => {});
