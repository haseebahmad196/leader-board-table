export type MatchRecord = {
  id: string;
  playedAt: string;
  teamA: [string, string];
  teamB: [string, string];
  scoreTeamA: number;
  scoreTeamB: number;
  rawMessage?: string;
};