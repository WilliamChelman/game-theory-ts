import { Decision } from "../Decision";
import { AbstractPlayer } from "./AbstractPlayer";

export class RandomPlayer extends AbstractPlayer {
  clone(): RandomPlayer {
    return new RandomPlayer(this.chanceOfCooperation);
  }

  constructor(private chanceOfCooperation: number) {
    super();
  }

  public play(opponentId: number): Decision {
    return Math.random() <= this.chanceOfCooperation
      ? Decision.COOPERATE
      : Decision.BETRAY;
  }
}
