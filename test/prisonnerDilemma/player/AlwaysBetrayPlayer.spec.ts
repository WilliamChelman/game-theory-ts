import { Decision } from "../../../src/prisonnerDilemma/Decision";
import { assert } from "chai";
import { AlwaysBetrayPlayer } from "../../../src/prisonnerDilemma/player/AlwaysBetrayPlayer";

describe("AlwaysBetrayPlayer", () => {
  it("should always betray", () => {
    const player = new AlwaysBetrayPlayer();
    assert.equal(player.play(1), Decision.BETRAY);
  });
});
