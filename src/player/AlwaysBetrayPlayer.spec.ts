import { Decision } from "../Decision";
import { assert } from "chai";
import { AlwaysBetrayPlayer } from "./AlwaysBetrayPlayer";

describe("AlwaysBetrayPlayer", () => {
  it("should always cooperate", () => {
    const player = new AlwaysBetrayPlayer();
    assert.equal(player.play(1), Decision.BETRAY);
  });
});
