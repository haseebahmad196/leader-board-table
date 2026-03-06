import Link from "next/link";
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
  Crown,
} from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import LeaderboardTable from "@/components/dashboard/LeaderboardTable";

const playerRows = [
  {
    rank: "#1",
    name: "Waleed",
    matches: 16,
    wins: 12,
    losses: 4,
    winRate: "75.0%",
    pointsFor: 288,
    pointsAgainst: 223,
    pointDiff: "+65",
  },
  {
    rank: "#2",
    name: "Umer",
    matches: 17,
    wins: 11,
    losses: 6,
    winRate: "64.7%",
    pointsFor: 293,
    pointsAgainst: 246,
    pointDiff: "+47",
  },
  {
    rank: "#3",
    name: "Haseeb",
    matches: 22,
    wins: 8,
    losses: 14,
    winRate: "36.4%",
    pointsFor: 326,
    pointsAgainst: 364,
    pointDiff: "-38",
  },
  {
    rank: "#4",
    name: "Shams",
    matches: 11,
    wins: 6,
    losses: 5,
    winRate: "54.5%",
    pointsFor: 170,
    pointsAgainst: 174,
    pointDiff: "-4",
  },
  {
    rank: "#5",
    name: "Arsalan",
    matches: 11,
    wins: 5,
    losses: 6,
    winRate: "45.5%",
    pointsFor: 191,
    pointsAgainst: 193,
    pointDiff: "-2",
  },
  {
    rank: "#6",
    name: "Gajju",
    matches: 15,
    wins: 5,
    losses: 10,
    winRate: "33.3%",
    pointsFor: 212,
    pointsAgainst: 263,
    pointDiff: "-51",
  },
  {
    rank: "#7",
    name: "Zaid",
    matches: 5,
    wins: 2,
    losses: 3,
    winRate: "40.0%",
    pointsFor: 73,
    pointsAgainst: 68,
    pointDiff: "+5",
  },
  {
    rank: "#8",
    name: "Wasti",
    matches: 3,
    wins: 1,
    losses: 2,
    winRate: "33.3%",
    pointsFor: 35,
    pointsAgainst: 57,
    pointDiff: "-22",
  },
];

const teamRows = [
  {
    rank: "#1",
    team: "Umer + Waleed",
    matches: 10,
    wins: 7,
    losses: 3,
    winRate: "70.0%",
    diff: "+37",
  },
  {
    rank: "#2",
    team: "Arsalan + Haseeb",
    matches: 6,
    wins: 3,
    losses: 3,
    winRate: "50.0%",
    diff: "+9",
  },
  {
    rank: "#3",
    team: "Waleed + Shams",
    matches: 2,
    wins: 2,
    losses: 0,
    winRate: "100.0%",
    diff: "+17",
  },
  {
    rank: "#4",
    team: "Haseeb + Zaid",
    matches: 3,
    wins: 2,
    losses: 1,
    winRate: "66.7%",
    diff: "+19",
  },
  {
    rank: "#5",
    team: "Umer + Shams",
    matches: 3,
    wins: 2,
    losses: 1,
    winRate: "66.7%",
    diff: "+13",
  },
  {
    rank: "#6",
    team: "Gajju + Waleed",
    matches: 3,
    wins: 2,
    losses: 1,
    winRate: "66.7%",
    diff: "+3",
  },
  {
    rank: "#7",
    team: "Haseeb + Gajju",
    matches: 10,
    wins: 2,
    losses: 8,
    winRate: "20.0%",
    diff: "-58",
  },
];

const highlights = [
  {
    title: "Top player",
    value: "Waleed",
    icon: Crown,
  },
  {
    title: "Strongest duo",
    value: "Umer + Waleed",
    icon: Flame,
  },
  {
    title: "Most active player",
    value: "Haseeb",
    icon: Activity,
  },
  {
    title: "Most losses duo",
    value: "Haseeb + Gajju",
    icon: ShieldAlert,
  },
];

export default function DashboardPage() {
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
          </div>
        </div>

        <div className="mb-6 overflow-hidden rounded-[28px] border border-red-900/40 bg-gradient-to-r from-black via-red-950/25 to-black shadow-[0_0_50px_rgba(127,29,29,0.24)] sm:mb-8">
          <div className="grid gap-6 px-5 py-7 sm:px-8 sm:py-10 lg:grid-cols-[1.35fr_0.95fr] lg:items-center">
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
    Official red and black gaming dashboard with clean standings,
    best duos, losses, win rate, and points performance.
  </p>

  <div className="inline-flex rounded-2xl border border-red-800/40 bg-black/50 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-red-200 sm:text-sm">
    Official standings counted from 23 Feb 2026, 2:39 PM
  </div>
</div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-red-800/30 bg-black/50 px-4 py-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                    Official Matches
                  </div>
                  <div className="mt-1 text-2xl font-black text-white">25</div>
                </div>

                <div className="rounded-2xl border border-red-800/30 bg-black/50 px-4 py-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-300">
                    Leader
                  </div>
                  <div className="mt-1 text-2xl font-black text-white">
                    Waleed
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {highlights.map((item) => {
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

        <div className="mb-6 grid gap-4 sm:mb-8 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Official Matches"
            value="25"
            subtitle="After reset only"
            icon={Target}
          />
          <StatCard
            title="Top Player"
            value="Waleed"
            subtitle="12 wins • 75.0% WR"
            icon={Trophy}
          />
          <StatCard
            title="Best Team"
            value="Umer + Waleed"
            subtitle="7 wins • 70.0% WR"
            icon={Flame}
          />
          <StatCard
            title="Most Losses"
            value="Haseeb + Gajju"
            subtitle="8 losses"
            icon={ShieldAlert}
          />
        </div>

        <div className="grid gap-6">
          <section id="players">
            <LeaderboardTable
              title="Player Standings"
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
              rows={playerRows}
            />
          </section>

          <section id="teams">
            <LeaderboardTable
              title="Team Standings"
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
              rows={teamRows}
            />
          </section>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3">
          <div className="rounded-[28px] border border-red-900/40 bg-black/75 p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)] sm:p-6">
            <div className="mb-3 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <Medal size={20} />
            </div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              MVP
            </div>
            <div className="text-2xl font-black text-white">Waleed</div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Highest wins and strongest overall official performance.
            </p>
          </div>

          <div className="rounded-[28px] border border-red-900/40 bg-black/75 p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)] sm:p-6">
            <div className="mb-3 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <Flame size={20} />
            </div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Strongest Duo
            </div>
            <div className="text-2xl font-black text-white">Umer + Waleed</div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Most reliable recurring team in the official standings.
            </p>
          </div>

          <div className="rounded-[28px] border border-red-900/40 bg-black/75 p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)] sm:p-6">
            <div className="mb-3 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <Activity size={20} />
            </div>
            <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Most Active
            </div>
            <div className="text-2xl font-black text-white">Haseeb</div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Played the most official matches in the current standings.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}