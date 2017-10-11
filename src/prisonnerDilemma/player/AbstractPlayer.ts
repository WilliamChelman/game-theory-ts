import { Decision } from "../Decision";
import { IPlayer } from "./IPlayer";

export abstract class AbstractPlayer implements IPlayer {
  public score = 0;
  public id: number;

  public abstract play(opponentId: number): Decision;

  public processResult(opponentId: number, opponentDecision: Decision): void {}

  public reset(): void {}

  public abstract clone(): IPlayer;
}
