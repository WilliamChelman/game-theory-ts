import { expect } from "chai";
import { utils } from "./utils";
import { IPlayer } from "./player/IPlayer";
import { AlwaysCooperatePlayer } from "./player/AlwaysCooperatePlayer";
import { Decision } from "./Decision";
import { PrisonerDilemmaGame } from "./PrisonnerDilemmaGame";
import { AlwaysBetrayPlayer } from "./player/AlwaysBetrayPlayer";

const payoffs = {
  [Decision.COOPERATE]: {
    [Decision.COOPERATE]: 2,
    [Decision.BETRAY]: -1
  },
  [Decision.BETRAY]: {
    [Decision.COOPERATE]: 3,
    [Decision.BETRAY]: 0
  }
};

describe("PrisonerDilemmaGame", () => {
  it("should make a game where all players have 80 points", () => {
    const players: Array<IPlayer> = [];
    utils.doManyTimes(() => players.push(new AlwaysCooperatePlayer()), 5);

    const game = new PrisonerDilemmaGame(players, 10, payoffs);
    let roundResults = game.playToTheEnd();
    expect(roundResults.length, "There should have been 100 rounds").to.equal(
      100
    );

    players.forEach((value, index) =>
      expect(value.score, `Player ${index} should have 80 points`).to.equal(80)
    );
  });

  it("should make a game where all players have 0 points", () => {
    const players: Array<IPlayer> = [];
    utils.doManyTimes(() => players.push(new AlwaysBetrayPlayer()), 5);

    const game = new PrisonerDilemmaGame(players, 10, payoffs);
    let roundResults = game.playToTheEnd();
    expect(roundResults.length, "There should have been 100 rounds").to.equal(
      100
    );

    players.forEach((value, index) =>
      expect(value.score, `Player ${index} should have 0 points`).to.equal(0)
    );
  });

  it("should make a game where all cooperate players have x points and betray players have y points", () => {
    const cooperatePlayers: Array<IPlayer> = [];
    const betrayPlayers: Array<IPlayer> = [];
    utils.doManyTimes(
      () => cooperatePlayers.push(new AlwaysCooperatePlayer()),
      5
    );
    utils.doManyTimes(() => betrayPlayers.push(new AlwaysBetrayPlayer()), 5);

    const players: Array<IPlayer> = [];
    players.push(...cooperatePlayers, ...betrayPlayers);
    const game = new PrisonerDilemmaGame(players, 10, payoffs);
    let roundResults = game.playToTheEnd();
    expect(roundResults.length, "There should have been 450 rounds").to.equal(
      450
    );

    cooperatePlayers.forEach((value, index) =>
      expect(
        value.score,
        `Cooperate Player ${index} should have 30 points`
      ).to.equal(30)
    );
    betrayPlayers.forEach((value, index) =>
      expect(
        value.score,
        `Betray Player ${index} should have 150 points`
      ).to.equal(150)
    );
  });
});
