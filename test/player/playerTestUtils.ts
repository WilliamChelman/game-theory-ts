import { IPlayer } from "../../src/player/IPlayer";
import { Decision } from "../../src/Decision";
import { expect } from "chai";

export namespace playerTestUtils {
  export function playExpectAndProcess(
    player: IPlayer,
    expectedDecision: Decision,
    opponentDecision: Decision,
    message: string,
    opponentId = 1
  ) {
    expect(player.play(opponentId), message).to.equal(expectedDecision);
    player.processResult(opponentId, opponentDecision);
  }
}
