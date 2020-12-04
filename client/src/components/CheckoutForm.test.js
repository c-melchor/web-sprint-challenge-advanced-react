import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const formTitle = screen.getByTestId("title");
  expect(formTitle).toBeTruthy();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);
  const nameInput = screen.getByTestId("first");
  const lastName = screen.getByTestId("last");
  const addressInput = screen.getByTestId("address");
  const cityInput = screen.getByTestId("city");
  const zipInput = screen.getByTestId("zip");

  userEvent.type(nameInput, "Christina");
  userEvent.type(lastName, "Melchor");
  userEvent.type(addressInput, "111 main st");
  userEvent.type(cityInput, "chino");
  userEvent.type(zipInput, "91777");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const firstNameRender = await screen.getByText(/christina/i);
  expect(firstNameRender).toBeTruthy();
  const lastNameRender = await screen.getByText(/melchor/i);
  expect(lastNameRender).toBeTruthy();
  const addressRender = await screen.getByText(/111 main st/i);
  expect(addressRender).toBeTruthy();
  const cityRender = await screen.getByText(/chino/i);
  expect(cityRender).toBeTruthy();
  const zipRender = await screen.getAllByText(/91777/i);
  expect(zipRender).toBeTruthy();
});
