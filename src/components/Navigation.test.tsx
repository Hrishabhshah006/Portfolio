import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

function renderNav() {
  return render(
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}

describe("Navigation", () => {
  it("renders all navigation items", () => {
    renderNav();
    for (const label of ["Home", "About", "Experience", "Projects", "Skills", "Contact"]) {
      expect(
        screen.getByRole("button", { name: label })
      ).toBeInTheDocument();
    }
  });

  it("renders the brand initials", () => {
    renderNav();
    expect(screen.getByText("HS")).toBeInTheDocument();
  });
});
