export type TeamStanding = {
  teamName: string;
  players: [string, string];
  matches: number;
  wins: number;
  losses: number;
  winRate: number;
  pointsFor: number;
  pointsAgainst: number;
  pointDiff: number;
};