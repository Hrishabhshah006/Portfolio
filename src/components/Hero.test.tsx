import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

describe("Hero", () => {
  it("renders the name", () => {
    render(<Hero />);
    expect(screen.getByText("Hrishabh")).toBeInTheDocument();
    expect(screen.getByText("Shah")).toBeInTheDocument();
  });

  it("renders the GitHub profile link", () => {
    render(<Hero />);
    const github = screen.getByRole("link", { name: /github/i });
    expect(github).toHaveAttribute(
      "href",
      "https://github.com/hrishabhshah006"
    );
  });

  it("renders a call-to-action button", () => {
    render(<Hero />);
    expect(
      screen.getByRole("button", { name: /get in touch/i })
    ).toBeInTheDocument();
  });
});
