import { MatchRecord } from "@/types/match";
import { PlayerStanding } from "@/types/player";

export function getPlayerStandings(matches: MatchRecord[]): PlayerStanding[] {
  const playersMap: Record<string, PlayerStanding> = {};

  for (const match of matches) {
    const teamAWon = match.scoreTeamA > match.scoreTeamB;
    const teamBWon = match.scoreTeamB > match.scoreTeamA;

    for (const player of match.teamA) {
      if (!playersMap[player]) {
        playersMap[player] = {
          name: player,
          matches: 0,
          wins: 0,
          losses: 0,
          winRate: 0,
          pointsFor: 0,
          pointsAgainst: 0,
          pointDiff: 0,
        };
      }

      playersMap[player].matches += 1;
      playersMap[player].pointsFor += match.scoreTeamA;
      playersMap[player].pointsAgainst += match.scoreTeamB;

      if (teamAWon) playersMap[player].wins += 1;
      if (teamBWon) playersMap[player].losses += 1;
    }

    for (const player of match.teamB) {
      if (!playersMap[player]) {
        playersMap[player] = {
          name: player,
          matches: 0,
          wins: 0,
          losses: 0,
          winRate: 0,
          pointsFor: 0,
          pointsAgainst: 0,
          pointDiff: 0,
        };
      }

      playersMap[player].matches += 1;
      playersMap[player].pointsFor += match.scoreTeamB;
      playersMap[player].pointsAgainst += match.scoreTeamA;

      if (teamBWon) playersMap[player].wins += 1;
      if (teamAWon) playersMap[player].losses += 1;
    }
  }

  const standings = Object.values(playersMap).map((player) => {
    player.winRate = player.matches > 0 ? (player.wins / player.matches) * 100 : 0;
    player.pointDiff = player.pointsFor - player.pointsAgainst;
    return player;
  });

  standings.sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    if (b.winRate !== a.winRate) return b.winRate - a.winRate;
    return b.pointDiff - a.pointDiff;
  });

  return standings;
}