"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Trophy,
  Target,
  Flame,
  ShieldAlert,
  Swords,
  Home,
  ChevronDown,
  Medal,
  Activity,
  CalendarDays,
  TrendingUp,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import LeaderboardTable from "@/components/dashboard/LeaderboardTable";
import { monthlyStandings } from "@/lib/data/monthlyStandings";

type PlayerRow = {
  rank: string;
  name: string;
  matches: number;
  wins: number;
  losses: number;
  winRate: string;
  pointsFor: number;
  pointsAgainst: number;
  pointDiff: string;
};

function parseWinRate(value: string | number) {
  if (typeof value === "number") return value;
  return Number(String(value).replace("%", ""));
}

function buildTitleRaceRows(playerRows: PlayerRow[]) {
  const leader = playerRows[0];
  const leaderWins = Number(leader.wins);
  const leaderWinRate = parseWinRate(leader.winRate);

  return playerRows.map((player) => {
    const wins = Number(player.wins);
    const matches = Number(player.matches);
    const currentWinRate = parseWinRate(player.winRate);

    let winsNeeded = 0;

    if (player.name !== leader.name) {
      for (let extraWins = 1; extraWins <= 100; extraWins++) {
        const futureWins = wins + extraWins;
        const futureMatches = matches + extraWins;
        const futureWinRate = (futureWins / futureMatches) * 100;

        const goesTop =
          futureWins > leaderWins ||
          (futureWins === leaderWins && futureWinRate > leaderWinRate);

        if (goesTop) {
          winsNeeded = extraWins;
          break;
        }
      }
    }

    const estimatedMatchesAtCurrentForm =
      winsNeeded === 0
        ? 0
        : currentWinRate <= 0
        ? "-"
        : Math.ceil(winsNeeded / (currentWinRate / 100));

    let scenario = "Already leading this month";

    if (winsNeeded === 1) {
      scenario = `Needs 1 more straight win to move above the current leader if the leader stays on the same wins`;
    } else if (winsNeeded > 1) {
      scenario = `Needs ${winsNeeded} more straight wins to realistically take #1 if the leader does not add more wins`;
    }

    return {
      rank: player.rank,
      player: player.name,
      currentWins: wins,
      currentWR: `${currentWinRate.toFixed(1)}%`,
      winsNeeded: winsNeeded === 0 ? "0" : String(winsNeeded),
      estMatches:
        estimatedMatchesAtCurrentForm === "-"
          ? "-"
          : String(estimatedMatchesAtCurrentForm),
      scenario,
    };
  });
}

export default function DashboardPage() {
  const [selectedMonthKey, setSelectedMonthKey] = useState("march-2026");

  const selectedMonth = useMemo(() => {
    return (
      monthlyStandings.find((month) => month.key === selectedMonthKey) ??
      monthlyStandings[0]
    );
  }, [selectedMonthKey]);

  const playerRows = selectedMonth.playerRows as PlayerRow[];
  const titleRaceRows = useMemo(() => buildTitleRaceRows(playerRows), [playerRows]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#220001,_#050505_55%)] text-white">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl border border-red-800/40 bg-black/50 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-950/30"
          >
            <Home size={16} />
            Home
          </Link>

          <div className="flex flex-wrap gap-3">
            <a
              href="#players"
              className="inline-flex items-center gap-2 rounded-2xl border border-red-800/40 bg-red-950/30 px-4 py-3 text-sm font-bold text-red-200 transition hover:bg-red-950/50"
            >
              Players
              <ChevronDown size={16} />
            </a>
            <a
              href="#teams"
              className="inline-flex items-center gap-2 rounded-2xl border border-red-800/40 bg-red-950/30 px-4 py-3 text-sm font-bold text-red-200 transition hover:bg-red-950/50"
            >
              Teams
              <ChevronDown size={16} />
            </a>
            <a
              href="#title-race"
              className="inline-flex items-center gap-2 rounded-2xl border border-red-800/40 bg-red-950/30 px-4 py-3 text-sm font-bold text-red-200 transition hover:bg-red-950/50"
            >
              Title Race
              <ChevronDown size={16} />
            </a>
            {selectedMonth.matchRows?.length ? (
              <a
                href="#matches"
                className="inline-flex items-center gap-2 rounded-2xl border border-red-800/40 bg-red-950/30 px-4 py-3 text-sm font-bold text-red-200 transition hover:bg-red-950/50"
              >
                Matches
                <ChevronDown size={16} />
              </a>
            ) : null}
          </div>
        </div>

        <div className="mb-6 overflow-hidden rounded-[28px] border border-red-900/40 bg-gradient-to-r from-black via-red-950/25 to-black shadow-[0_0_50px_rgba(127,29,29,0.24)] sm:mb-8">
          <div className="grid gap-6 px-5 py-7 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-800/40 bg-red-950/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-red-200 sm:text-xs">
                <Swords size={14} />
                Rung Official Standings
              </div>

              <h1 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Monthly <span className="text-red-400">Leaderboard</span>
              </h1>

              <div className="mt-4 space-y-3">
                <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                  Official red and black gaming dashboard with separate monthly
                  standings, team performance, title race scenarios, and match
                  results.
                </p>

                <div className="inline-flex rounded-2xl border border-red-800/40 bg-black/50 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-red-200 sm:text-sm">
                  {selectedMonth.updatedLabel}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {monthlyStandings.map((month) => {
                  const active = month.key === selectedMonthKey;

                  return (
                    <button
                      key={month.key}
                      onClick={() => setSelectedMonthKey(month.key)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-bold transition ${
                        active
                          ? "border-red-500 bg-red-600 text-white"
                          : "border-red-800/30 bg-black/50 text-red-200 hover:bg-red-950/30"
                      }`}
                    >
                      {month.monthName}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-red-800/30 bg-black/50 px-4 py-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                    Current Month
                  </div>
                  <div className="mt-1 text-2xl font-black text-white">
                    {selectedMonth.monthName}
                  </div>
                </div>

                <div className="rounded-2xl border border-red-800/30 bg-black/50 px-4 py-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                    Matches
                  </div>
                  <div className="mt-1 text-2xl font-black text-white">
                    {selectedMonth.totalMatches}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {selectedMonth.highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-2xl border border-red-900/30 bg-black/60 p-4 transition hover:border-red-600/40 hover:bg-red-950/20"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                          {item.title}
                        </div>
                        <div className="mt-2 text-lg font-black text-white sm:text-xl">
                          {item.value}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-red-800/40 bg-red-950/30 p-2 text-red-300 transition group-hover:scale-105">
                        <Icon size={18} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 sm:mb-8 sm:grid-cols-2 xl:grid-cols-5">
          <StatCard
            title="Matches"
            value={selectedMonth.totalMatches}
            subtitle={selectedMonth.infoLabel}
            icon={Target}
          />
          <StatCard
            title="Top Player"
            value={selectedMonth.topPlayer}
            subtitle={selectedMonth.topPlayerSubtitle}
            icon={Trophy}
          />
          <StatCard
            title="Best Team"
            value={selectedMonth.bestTeam}
            subtitle={selectedMonth.bestTeamSubtitle}
            icon={Flame}
          />
          <StatCard
            title="Most Active"
            value={selectedMonth.mostActive}
            subtitle={selectedMonth.mostActiveSubtitle}
            icon={Activity}
          />
          <StatCard
            title="Panoti"
            value={selectedMonth.panoti}
            subtitle={selectedMonth.panotiSubtitle}
            icon={ShieldAlert}
          />
        </div>

        <div className="grid gap-6">
          <section id="players">
            <LeaderboardTable
              title={`${selectedMonth.monthName} Player Standings`}
              mobilePrimaryKey="name"
              columns={[
                { key: "rank", label: "Rank" },
                { key: "name", label: "Player" },
                { key: "matches", label: "Matches" },
                { key: "wins", label: "Wins" },
                { key: "losses", label: "Losses" },
                { key: "winRate", label: "Win Rate" },
                { key: "pointsFor", label: "Points For" },
                { key: "pointsAgainst", label: "Points Against" },
                { key: "pointDiff", label: "Diff" },
              ]}
              rows={selectedMonth.playerRows}
            />
          </section>

          <section id="teams">
            <LeaderboardTable
              title={`${selectedMonth.monthName} Team Standings`}
              mobilePrimaryKey="team"
              columns={[
                { key: "rank", label: "Rank" },
                { key: "team", label: "Team" },
                { key: "matches", label: "Matches" },
                { key: "wins", label: "Wins" },
                { key: "losses", label: "Losses" },
                { key: "winRate", label: "Win Rate" },
                { key: "diff", label: "Diff" },
              ]}
              rows={selectedMonth.teamRows}
            />
          </section>

          <section id="title-race">
            <LeaderboardTable
              title={`${selectedMonth.monthName} Title Race Scenarios`}
              mobilePrimaryKey="player"
              columns={[
                { key: "rank", label: "Rank" },
                { key: "player", label: "Player" },
                { key: "currentWins", label: "Current Wins" },
                { key: "currentWR", label: "Current WR" },
                { key: "winsNeeded", label: "Wins Needed For #1" },
                { key: "estMatches", label: "Est. Matches At Current Form" },
                { key: "scenario", label: "What It Needs To Do" },
              ]}
              rows={titleRaceRows}
            />
          </section>

          {selectedMonth.matchRows?.length ? (
            <section
              id="matches"
              className="overflow-hidden rounded-[28px] border border-red-900/40 bg-black/75 shadow-[0_0_40px_rgba(127,29,29,0.22)]"
            >
              <div className="border-b border-red-900/40 bg-gradient-to-r from-red-950 via-black to-red-950 px-5 py-5 sm:px-6">
                <h2 className="text-xl font-black tracking-wide text-white sm:text-2xl">
                  {selectedMonth.monthName} Match Results
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Team vs team results for the selected month.
                </p>
              </div>

              <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-2 xl:grid-cols-3">
                {selectedMonth.matchRows.map((match) => {
                  const teamAWon = match.scoreA > match.scoreB;
                  const teamBWon = match.scoreB > match.scoreA;

                  return (
                    <div
                      key={match.id}
                      className="rounded-3xl border border-red-900/30 bg-gradient-to-br from-black via-red-950/20 to-black p-4 shadow-[0_0_20px_rgba(127,29,29,0.16)]"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                          Match #{match.id}
                        </div>
                        <div className="rounded-full border border-red-800/30 bg-red-950/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-red-200">
                          {selectedMonth.monthName}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/5 px-3 py-3">
                          <div>
                            <div className={`text-sm font-bold ${teamAWon ? "text-white" : "text-slate-300"}`}>
                              {match.teamA}
                            </div>
                            <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                              Team A
                            </div>
                          </div>
                          <div className={`text-2xl font-black ${teamAWon ? "text-green-400" : "text-red-300"}`}>
                            {match.scoreA}
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/5 px-3 py-3">
                          <div>
                            <div className={`text-sm font-bold ${teamBWon ? "text-white" : "text-slate-300"}`}>
                              {match.teamB}
                            </div>
                            <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                              Team B
                            </div>
                          </div>
                          <div className={`text-2xl font-black ${teamBWon ? "text-green-400" : "text-red-300"}`}>
                            {match.scoreB}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ) : null}
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-4">
          <div className="rounded-[28px] border border-red-900/40 bg-black/75 p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)] sm:p-6">
            <div className="mb-3 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <Medal size={20} />
            </div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Top Player
            </div>
            <div className="text-2xl font-black text-white">
              {selectedMonth.topPlayer}
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {selectedMonth.topPlayerSubtitle}
            </p>
          </div>

          <div className="rounded-[28px] border border-red-900/40 bg-black/75 p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)] sm:p-6">
            <div className="mb-3 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <Flame size={20} />
            </div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Strongest Duo
            </div>
            <div className="text-2xl font-black text-white">
              {selectedMonth.bestTeam}
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {selectedMonth.bestTeamSubtitle}
            </p>
          </div>

          <div className="rounded-[28px] border border-red-900/40 bg-black/75 p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)] sm:p-6">
            <div className="mb-3 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <Activity size={20} />
            </div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Most Active
            </div>
            <div className="text-2xl font-black text-white">
              {selectedMonth.mostActive}
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {selectedMonth.mostActiveSubtitle}
            </p>
          </div>

          <div className="rounded-[28px] border border-red-900/40 bg-black/75 p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)] sm:p-6">
            <div className="mb-3 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <TrendingUp size={20} />
            </div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Race To #1
            </div>
            <div className="text-2xl font-black text-white">
              {selectedMonth.playerRows[1]?.name ?? "-"}
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Closest challenger to the current monthly leader.
            </p>
          </div>
        </div>

        {selectedMonth.key === "march-2026" ? (
          <div className="mt-6 rounded-[28px] border border-red-900/40 bg-black/75 p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)] sm:p-6">
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              How the title race is calculated
            </div>
            <p className="text-sm leading-7 text-slate-400">
              “Wins needed for #1” means the minimum number of extra straight wins
              a player needs to move above the current leader if the leader does
              not add more wins. “Estimated matches at current form” uses the
              player’s current monthly win rate as a rough projection, so it is
              a scenario guide, not a guarantee.
            </p>
          </div>
        ) : null}
      </section>
    </main>
  );
}