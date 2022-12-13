// import { goblinTrigger, goblin } from '../playground';

// test('testing playground', () => {
// 	const goblinFunc = jest.fn(() => {
// 		goblin();
// 	});
// 	goblinFunc();
// 	expect(goblinFunc).toHaveBeenCalled();
// });
import demo from "../app";

describe("Пример теста", () => {
  test.each([
    { str: "Hello!", expected: "Demo: Hello!" },
    { str: "", expected: "Demo: " },
    { str: 100, expected: "Demo: 100" },
  ])("demo($str)", ({ str, expected }) => {
    expect(demo(str)).toBe(expected);
  });
});
