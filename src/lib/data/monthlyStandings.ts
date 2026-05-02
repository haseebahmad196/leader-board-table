// src/lib/data/monthlyStandings.ts
import { type LucideIcon } from "lucide-react";
import { februaryStanding } from "./months/february-2026";
import { marchStanding } from "./months/march-2026";
import { aprilStanding } from "./months/april-2026";
import { mayStanding } from "./months/may-2026";

export type StandingRow = Record<string, string | number>;

export type HighlightItem = {
  title: string;
  value: string;
  icon: LucideIcon;
};

export type RecordItem = {
  title: string;
  value: string;
  description: string;
};

export type MatchRow = {
  id: number;
  teamA: string;
  scoreA: number;
  teamB: string;
  scoreB: number;
};

export type MonthStandingData = {
  key: string;
  monthName: string;
  updatedLabel: string;
  infoLabel: string;
  totalMatches: number;
  topPlayer: string;
  topPlayerSubtitle: string;
  bestTeam: string;
  bestTeamSubtitle: string;
  mostActive: string;
  mostActiveSubtitle: string;
  panoti: string;
  panotiSubtitle: string;
  playerRows: StandingRow[];
  teamRows: StandingRow[];
  highlights: HighlightItem[];
  records?: RecordItem[];
  matchRows?: MatchRow[];
};


export const monthlyStandings: MonthStandingData[] = [
  februaryStanding,
  marchStanding,
  aprilStanding,
  mayStanding,
];
