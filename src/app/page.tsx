import Link from "next/link";
import { Trophy, Swords, Users, BarChart3, Flame, ShieldAlert } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#220001,_#050505_55%)] text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-red-800/40 bg-red-950/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-red-200 sm:text-sm">
          <Swords size={16} />
          Rung Standings Tracker
        </div>

        <h1 className="max-w-5xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Track your monthly{" "}
          <span className="text-red-400">Rung standings</span>
          <br className="hidden sm:block" /> in a premium gaming dashboard
        </h1>

        <p className="mt-5 max-w-2xl text-sm text-slate-300 sm:text-base md:text-lg">
          View official player rankings, best teams, match history, wins,
          losses, win rate, and monthly performance from your WhatsApp game
          results in a bold red and black theme.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/dashboard"
            className="rounded-2xl bg-red-600 px-6 py-3 text-center font-bold text-white transition hover:bg-red-500"
          >
            Open Dashboard
          </Link>

          <Link
            href="/admin"
            className="rounded-2xl border border-red-800/40 bg-black/40 px-6 py-3 text-center font-bold text-white transition hover:bg-red-950/30"
          >
            Upload Results
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[28px] border border-red-900/40 bg-gradient-to-br from-black via-red-950/20 to-black p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)]">
            <div className="mb-4 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <Users size={22} />
            </div>
            <h2 className="text-xl font-black text-white">Player Rankings</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              See who is leading the table with the most wins, best form, and
              strongest win rate.
            </p>
          </div>

          <div className="rounded-[28px] border border-red-900/40 bg-gradient-to-br from-black via-red-950/20 to-black p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)]">
            <div className="mb-4 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <Trophy size={22} />
            </div>
            <h2 className="text-xl font-black text-white">Best Teams</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Find the strongest duo, most successful recurring team, and the
              pairings with the toughest record.
            </p>
          </div>

          <div className="rounded-[28px] border border-red-900/40 bg-gradient-to-br from-black via-red-950/20 to-black p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)]">
            <div className="mb-4 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <BarChart3 size={22} />
            </div>
            <h2 className="text-xl font-black text-white">Performance KPIs</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Track matches, wins, losses, points scored, points conceded, and
              point difference in one place.
            </p>
          </div>

          <div className="rounded-[28px] border border-red-900/40 bg-gradient-to-br from-black via-red-950/20 to-black p-5 shadow-[0_0_30px_rgba(127,29,29,0.18)]">
            <div className="mb-4 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <Swords size={22} />
            </div>
            <h2 className="text-xl font-black text-white">Match History</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Browse all monthly results, uploaded chats, and official posted
              games in a clean competitive layout.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-[28px] border border-red-900/40 bg-black/75 p-5 shadow-[0_0_25px_rgba(127,29,29,0.16)]">
            <div className="mb-3 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <Flame size={20} />
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Competitive Mode
            </div>
            <h3 className="mt-2 text-2xl font-black text-white">
              Gaming Style UI
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Elegant red and black visuals with leaderboard-focused cards and
              premium match presentation.
            </p>
          </div>

          <div className="rounded-[28px] border border-red-900/40 bg-black/75 p-5 shadow-[0_0_25px_rgba(127,29,29,0.16)]">
            <div className="mb-3 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <ShieldAlert size={20} />
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Official Records
            </div>
            <h3 className="mt-2 text-2xl font-black text-white">
              Clean Standings
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Show only valid posted results so the monthly ranking stays fair,
              accurate, and easy to trust.
            </p>
          </div>

          <div className="rounded-[28px] border border-red-900/40 bg-black/75 p-5 shadow-[0_0_25px_rgba(127,29,29,0.16)]">
            <div className="mb-3 inline-flex rounded-2xl border border-red-800/40 bg-red-950/40 p-3 text-red-300">
              <Trophy size={20} />
            </div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
              Monthly Tracking
            </div>
            <h3 className="mt-2 text-2xl font-black text-white">
              Ready to Scale
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Keep updating each month with new WhatsApp results and expand the
              dashboard without changing the whole design.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}