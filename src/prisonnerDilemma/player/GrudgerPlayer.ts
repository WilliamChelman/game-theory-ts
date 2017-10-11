import { AbstractPlayer } from "./AbstractPlayer";
import { Decision } from "../Decision";

export class GrudgerPlayer extends AbstractPlayer {
  clone(): GrudgerPlayer {
    return new GrudgerPlayer();
  }

  private hasBeenBetrayedOnce: boolean = false;

  play(opponentId: number): Decision {
    return this.hasBeenBetrayedOnce ? Decision.BETRAY : Decision.COOPERATE;
  }

  processResult(opponentId: number, opponentDecision: Decision): void {
    if (opponentDecision === Decision.BETRAY) {
      this.hasBeenBetrayedOnce = true;
    }
  }

  public reset(): void {
    super.reset();
    this.hasBeenBetrayedOnce = false;
  }
}
