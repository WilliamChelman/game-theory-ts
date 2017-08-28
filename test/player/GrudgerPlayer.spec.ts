import { Decision } from "../../src/Decision";
import { GrudgerPlayer } from "../../src/player/GrudgerPlayer";
import { playerTestUtils } from "./playerTestUtils";

describe("GrudgerPlayer", () => {
  it("should always betray after being betrayed once betray", () => {
    const player = new GrudgerPlayer();
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.COOPERATE,
      "Should coop on run 1"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.BETRAY,
      "Should coop on run 2"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.BETRAY,
      Decision.COOPERATE,
      "Should always betray"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.BETRAY,
      Decision.COOPERATE,
      "Should always betray"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.BETRAY,
      Decision.BETRAY,
      "Should always betray"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.BETRAY,
      Decision.BETRAY,
      "Should always betray"
    );
  });

  it("should cooperate after reset", () => {
    const player = new GrudgerPlayer();
    player.processResult(1, Decision.BETRAY);
    player.reset();
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.BETRAY,
      "Should coop"
    );
  });
});
