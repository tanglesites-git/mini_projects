import { assert, describe, expect, it, beforeEach } from "vitest";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

import { Calander } from "../src/features/Calendar/calendar";

describe("Calendar", () => {
  it("should return a 0 or Sunday", () => {
    const c = new Calander();
    const result = c.getDayOfTheFirstDayOfTheMonth(8, 2024);
    expect(result).toBe(0);
  });
});
