import { Decision } from "../../../src/prisonnerDilemma/Decision";
import { DetectivePlayer } from "../../../src/prisonnerDilemma/player/DetectivePlayer";
import { utils } from "../../../src/prisonnerDilemma/utils";
import { playerTestUtils } from "./playerTestUtils";

describe("DetectivePlayer", () => {
  it("should plays coop, bet, coop, coop then act as always betray", () => {
    const player = new DetectivePlayer();
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.COOPERATE,
      "Should coop on run 1"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.BETRAY,
      Decision.COOPERATE,
      "Should betray on run 2"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.COOPERATE,
      "Should coop on run 3"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.COOPERATE,
      "Should coop on run 4"
    );
    utils.doManyTimes(() => {
      playerTestUtils.playExpectAndProcess(
        player,
        Decision.BETRAY,
        Decision.COOPERATE,
        "Should always betray"
      );
    }, 5);
    utils.doManyTimes(() => {
      playerTestUtils.playExpectAndProcess(
        player,
        Decision.BETRAY,
        Decision.BETRAY,
        "Should always betray"
      );
    }, 5);
  });

  it("should plays coop, bet, coop, coop then act as CopyCat", () => {
    const player = new DetectivePlayer();
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.COOPERATE,
      "Should coop on run 1"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.BETRAY,
      Decision.COOPERATE,
      "Should betray on run 2"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.BETRAY,
      "Should coop on run 3"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.COOPERATE,
      "Should coop on run 4"
    );

    // now act as copy cat
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.COOPERATE,
      "Should begin with coop"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.BETRAY,
      "Should copy coop"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.BETRAY,
      Decision.BETRAY,
      "Should copy betray"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.BETRAY,
      Decision.COOPERATE,
      "Should copy betray"
    );
    playerTestUtils.playExpectAndProcess(
      player,
      Decision.COOPERATE,
      Decision.COOPERATE,
      "Should copy coop"
    );
  });
});
