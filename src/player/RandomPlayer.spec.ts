import { Decision } from "../Decision";
import { assert } from "chai";
import { RandomPlayer } from "./RandomPlayer";

const testRandomPlayer = (
  probability: number,
  totalCount: number = 10000,
  precision: number = 0.1
) => {
  const player = new RandomPlayer(probability);
  let counts = 0;
  for (let i = 0; i < totalCount; ++i) {
    if (player.play(i) === Decision.COOPERATE) {
      ++counts;
    }
  }
  assert.closeTo(counts / totalCount, probability, precision);
};

describe("RandomPlayer", () => {
  it("should cooperate 50% of the time", () => {
    testRandomPlayer(0.5);
  });

  it("should cooperate 25% of the time", () => {
    testRandomPlayer(0.25);
  });

  it("should cooperate 75% of the time", () => {
    testRandomPlayer(0.75);
  });
});
