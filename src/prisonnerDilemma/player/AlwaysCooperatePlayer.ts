import { Decision } from "../Decision";
import { AbstractPlayer } from "./AbstractPlayer";

export class AlwaysCooperatePlayer extends AbstractPlayer {
  public play(opponentId: number): Decision {
    return Decision.COOPERATE;
  }

  public clone(): AlwaysCooperatePlayer {
    return new AlwaysCooperatePlayer();
  }
}
