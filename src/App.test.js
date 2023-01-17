import { render, screen } from "@testing-library/react";
import App from "./App";

test("Hello Eya", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello eya/i);
  expect(linkElement).toBeInTheDocument();
});
test("Ngo Ndjip Liamidi", () => {
  render(<App />);
  const linkElement = screen.getByText(/Ngo Ndjip Liamidi/i);
  expect(linkElement).toBeInTheDocument();
});
