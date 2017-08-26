import { Decision } from "../Decision";
import { AbstractPlayer } from "./AbstractPlayer";

export class RandomPlayer extends AbstractPlayer {
  constructor(private chanceOfCooperation: number = 0.5) {
    super();
  }

  public play(opponentId: number): Decision {
    return Math.random() <= this.chanceOfCooperation
      ? Decision.COOPERATE
      : Decision.BETRAY;
  }
}
