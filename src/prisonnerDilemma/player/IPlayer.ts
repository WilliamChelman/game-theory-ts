import { Decision } from "../Decision";

export interface IPlayer {
  id: number;
  score: number;
  play(opponentId: number): Decision;
  processResult(opponentId: number, opponentDecision: Decision): void;
  reset(): void;
  clone(): IPlayer;
}
