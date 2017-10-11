import { AbstractPlayer } from "./AbstractPlayer";
import { Decision } from "../Decision";

export class CopyCatPlayer extends AbstractPlayer {
  private nextAction: Decision;

  constructor(private initialAction: Decision = Decision.COOPERATE) {
    super();
    this.reset();
  }

  play(opponentId: number): Decision {
    return this.nextAction;
  }

  processResult(opponentId: number, opponentDecision: Decision): void {
    this.nextAction = opponentDecision;
  }

  reset(): void {
    super.reset();
    this.nextAction = this.initialAction;
  }

  clone(): CopyCatPlayer {
    return new CopyCatPlayer(this.initialAction);
  }
}
