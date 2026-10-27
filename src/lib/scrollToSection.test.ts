import { beforeEach, describe, expect, it, vi } from "vitest";
import { scrollToSection } from "./scrollToSection";

describe("scrollToSection", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    window.history.replaceState(null, "", "/");
  });

  it("scrolls to a section and replaces the current history entry", () => {
    const section = document.createElement("section");
    section.id = "about";
    section.scrollIntoView = vi.fn();
    document.body.append(section);
    const initialHistoryLength = window.history.length;

    expect(scrollToSection("about")).toBe(true);

    expect(window.location.hash).toBe("#about");
    expect(section.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
    expect(window.history.length).toBe(initialHistoryLength);
  });

  it("returns false when the section does not exist", () => {
    expect(scrollToSection("missing")).toBe(false);
    expect(window.location.hash).toBe("");
  });
});
