import { assert, describe, expect, it, beforeEach } from "vitest";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

beforeEach(() => {
  const indexHTML = fs.readFileSync(path.resolve(__dirname, "files/index.html"), "utf8");
  const dom = new JSDOM(indexHTML, {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true,
  });
  global.window = dom.window;
  global.document = dom.window.document;
});

describe("Accordion", () => {
  it("Expect accordion to be in dom", () => {
    const accordion = document.querySelector(".ts-accordion");
    expect(accordion).not.toBeNull();
  });

  it("Expect accordion to have 4 items", () => {
    const accordion = document.querySelector(".ts-accordion");
    const buttons = accordion?.querySelectorAll(".ts-accordion-button");
    expect(buttons?.length).toBe(4);
  });

  it("Expect accordion to not be null", () => {
    const accordion = document.querySelector(".ts-accordion");
    expect(accordion).not.toBe(null);
  });

  it("Expect button to not be null", () => {
    const accordion = document.querySelector(".ts-accordion");
    const buttons = accordion?.querySelector(".ts-accordion-button");
    expect(buttons[0]).not.toBe(null);
  });

  it("Expect accordion panel to not be null", () => {
    const accordion = document.querySelector(".ts-accordion");
    const buttons = accordion?.querySelector(".ts-accordion-button");
    const panel = accordion?.querySelector(".ts-accordion-panel");
    expect(panel).not.toBe(null);
  });

  it("Expect accordio panel max height to not be null after click", () => {
    const accordion = document.querySelector(".ts-accordion");
    const buttons = accordion?.querySelector(".ts-accordion-button");
    const panel = buttons?.nextElementSibling;
    const result = buttons?.dispatchEvent(new window.window.MouseEvent("click"));
    setTimeout(() => {
      expect(panel.style.maxHeight).not.toBe('');
      expect(panel.dataset.expanded).toBe('true');
    }, 1000);
  });
});