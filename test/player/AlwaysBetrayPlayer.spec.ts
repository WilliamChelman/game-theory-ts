import { Decision } from "../../src/Decision";
import { assert } from "chai";
import { AlwaysBetrayPlayer } from "../../src/player/AlwaysBetrayPlayer";

describe("AlwaysBetrayPlayer", () => {
  it("should always betray", () => {
    const player = new AlwaysBetrayPlayer();
    assert.equal(player.play(1), Decision.BETRAY);
  });
});
