import { AbstractPlayer } from "./AbstractPlayer";
import { Decision } from "../Decision";
import { AlwaysBetrayPlayer } from "./AlwaysBetrayPlayer";
import { IPlayer } from "./IPlayer";
import { CopyCatPlayer } from "./CopyCatPlayer";

export class DetectivePlayer extends AbstractPlayer {
  private round: number;
  private surrogatePlayer: IPlayer;

  constructor() {
    super();
    this.reset();
  }

  /**
     * @description The first 4 rounds are coop, betray, coop, coop then:
     * <ul>
     *     <li> if the player was betrayed at least once during those 4 rounds, it will behave as a CopyCat </li>
     *     <li> else it will then behave as a AlwaysBetray </li>
     * </ul>
     */
  play(opponentId: number): Decision {
    switch (this.round) {
      case 0:
        return Decision.COOPERATE;
      case 1:
        return Decision.BETRAY;
      case 2:
        return Decision.COOPERATE;
      case 3:
        return Decision.COOPERATE;
      default:
        return this.surrogatePlayer.play(opponentId);
    }
  }

  public processResult(opponentId: number, opponentDecision: Decision): void {
    if (this.round < 4) {
      if (opponentDecision === Decision.BETRAY) {
        this.surrogatePlayer = new CopyCatPlayer();
      }
    } else {
      this.surrogatePlayer.processResult(opponentId, opponentDecision);
    }
    ++this.round;
  }

  public reset(): void {
    super.reset();
    this.round = 0;
    this.surrogatePlayer = new AlwaysBetrayPlayer();
  }
}
