import { MatchRecord } from "@/types/match";
import { TeamStanding } from "@/types/team";

export function getTeamStandings(matches: MatchRecord[]): TeamStanding[] {
  const teamsMap: Record<string, TeamStanding> = {};

  for (const match of matches) {
    const teamAKey = [...match.teamA].sort().join(" + ");
    const teamBKey = [...match.teamB].sort().join(" + ");

    if (!teamsMap[teamAKey]) {
      teamsMap[teamAKey] = {
        teamName: teamAKey,
        players: [...match.teamA].sort() as [string, string],
        matches: 0,
        wins: 0,
        losses: 0,
        winRate: 0,
        pointsFor: 0,
        pointsAgainst: 0,
        pointDiff: 0,
      };
    }

    if (!teamsMap[teamBKey]) {
      teamsMap[teamBKey] = {
        teamName: teamBKey,
        players: [...match.teamB].sort() as [string, string],
        matches: 0,
        wins: 0,
        losses: 0,
        winRate: 0,
        pointsFor: 0,
        pointsAgainst: 0,
        pointDiff: 0,
      };
    }

    teamsMap[teamAKey].matches += 1;
    teamsMap[teamAKey].pointsFor += match.scoreTeamA;
    teamsMap[teamAKey].pointsAgainst += match.scoreTeamB;

    teamsMap[teamBKey].matches += 1;
    teamsMap[teamBKey].pointsFor += match.scoreTeamB;
    teamsMap[teamBKey].pointsAgainst += match.scoreTeamA;

    if (match.scoreTeamA > match.scoreTeamB) {
      teamsMap[teamAKey].wins += 1;
      teamsMap[teamBKey].losses += 1;
    } else if (match.scoreTeamB > match.scoreTeamA) {
      teamsMap[teamBKey].wins += 1;
      teamsMap[teamAKey].losses += 1;
    }
  }

  const standings = Object.values(teamsMap).map((team) => {
    team.winRate = team.matches > 0 ? (team.wins / team.matches) * 100 : 0;
    team.pointDiff = team.pointsFor - team.pointsAgainst;
    return team;
  });

  standings.sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    if (b.winRate !== a.winRate) return b.winRate - a.winRate;
    return b.pointDiff - a.pointDiff;
  });

  return standings;
}