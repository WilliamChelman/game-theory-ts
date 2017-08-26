import { IPlayer } from "./player/IPlayer";
import { Payoffs } from "./Payoffs";
import { Decision } from "./Decision";

export class PrisonerDilemmaGame {
  private currentPlayerId = 0;

  constructor(
    private players: Array<IPlayer>,
    private roundsPerPair: number,
    private payoffs: Payoffs
  ) {
    this.init();
  }

  public init() {
    this.players.forEach(player => (player.id = ++this.currentPlayerId));
  }

  public *play() {
    for (let i = 0; i < this.players.length; ++i) {
      let player1 = this.players[i];
      for (let j = i + 1; j < this.players.length; ++j) {
        let player2 = this.players[j];
        for (let k = 0; k < this.roundsPerPair; ++k) {
          yield this.playRound(player1, player2);
        }
        player1.reset();
        player2.reset();
      }
    }
  }

  public playToTheEnd(): Array<RoundResults> {
    return [...this.play()];
  }

  private playRound(player1: IPlayer, player2: IPlayer): RoundResults {
    const player1Decision = player1.play(player2.id);
    const player2Decision = player2.play(player1.id);
    const player1Payoff = this.payoffs[player1Decision][player2Decision];
    player1.score += player1Payoff;
    const player2Payoff = this.payoffs[player2Decision][player1Decision];
    player2.score += player2Payoff;
    player1.processResult(player2.id, player2Decision);
    player2.processResult(player1.id, player1Decision);
    return {
      player1: {
        player: player1,
        decision: player1Decision,
        payoff: player1Payoff
      },
      player2: {
        player: player2,
        decision: player2Decision,
        payoff: player2Payoff
      }
    };
  }
}

type RoundResults = {
  player1: PlayerResult;
  player2: PlayerResult;
};

type PlayerResult = {
  player: IPlayer;
  decision: Decision;
  payoff: number;
};
