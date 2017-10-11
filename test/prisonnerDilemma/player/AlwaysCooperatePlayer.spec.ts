import { Decision } from "../../../src/prisonnerDilemma/Decision";
import { AlwaysCooperatePlayer } from "../../../src/prisonnerDilemma/player/AlwaysCooperatePlayer";
import { assert } from "chai";

describe("AlwaysCooperatePlayer", () => {
  it("should always cooperate", () => {
    const player = new AlwaysCooperatePlayer();
    assert.equal(player.play(1), Decision.COOPERATE);
  });
});
