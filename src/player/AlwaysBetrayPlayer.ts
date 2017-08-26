import { Decision } from "../Decision";
import { AbstractPlayer } from "./AbstractPlayer";

export class AlwaysBetrayPlayer extends AbstractPlayer {
  public play(opponentId: number): Decision {
    return Decision.BETRAY;
  }
}
