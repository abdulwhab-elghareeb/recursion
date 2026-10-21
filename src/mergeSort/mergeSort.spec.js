import { describe, expect, test } from "@jest/globals";
import { mergeSort } from "./mergeSort.js"

describe("mergeSort", () => {
  test("works with normal cases", () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([0, 1, 1, 2, 3, 5, 8, 13])
    expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110])
  })

  test("works with already sorted arrays", () => {
    expect(mergeSort([])).toEqual([])
    expect(mergeSort([80])).toEqual([80])
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })
})