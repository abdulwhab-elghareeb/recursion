import { describe, expect, test } from "@jest/globals";
import { fibs, fibsRec } from "./fibs.js";

describe("fibs iterative", () => {
  test("returns an array of the Fibonacci numbers between 0 and n", () => {
    expect(fibs(12)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibs(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test("works with tricky cases", () => {
    expect(fibs(1)).toEqual([0]);
    expect(fibs(2)).toEqual([0, 1]);
  });
});

describe("fibs recursive", () => {
  test("returns an array of the Fibonacci numbers between 0 and n", () => {
    expect(fibsRec(12)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test("works with tricky cases", () => {
    expect(fibsRec(1)).toEqual([0]);
    expect(fibsRec(2)).toEqual([0, 1]);
  });
});
