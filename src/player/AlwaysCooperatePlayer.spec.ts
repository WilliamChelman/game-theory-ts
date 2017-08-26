import { Decision } from "../Decision";
import { AlwaysCooperatePlayer } from "./AlwaysCooperatePlayer";
import { assert } from "chai";

describe("AlwaysCooperatePlayer", () => {
  it("should always cooperate", () => {
    const player = new AlwaysCooperatePlayer();
    assert.equal(player.play(1), Decision.COOPERATE);
  });
});
