import { Decision } from "../../../src/prisonnerDilemma/Decision";
import { assert } from "chai";
import { CopyCatPlayer } from "../../../src/prisonnerDilemma/player/CopyCatPlayer";

describe("CopyCatPlayer", () => {
  it("should always mirror the opponent's action", () => {
    const player = new CopyCatPlayer(Decision.COOPERATE);
    assert.equal(
      player.play(1),
      Decision.COOPERATE,
      "Should cooperate on run 1"
    );
    player.processResult(1, Decision.COOPERATE);
    assert.equal(
      player.play(1),
      Decision.COOPERATE,
      "Should cooperate on run 2"
    );
    player.processResult(1, Decision.BETRAY);
    assert.equal(player.play(1), Decision.BETRAY, "Should betray on run 3");
  });

  it("should cooperate after reset", () => {
    const player = new CopyCatPlayer(Decision.COOPERATE);
    player.processResult(1, Decision.BETRAY);
    player.reset();
    assert.equal(
      player.play(1),
      Decision.COOPERATE,
      "Should cooperate after reset"
    );
  });
});
