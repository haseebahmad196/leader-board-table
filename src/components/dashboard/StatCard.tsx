import { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-[28px] border border-red-900/40 bg-gradient-to-br from-black via-red-950/30 to-black p-5 shadow-[0_0_35px_rgba(127,29,29,0.22)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xs font-bold uppercase tracking-[0.22em] text-red-200">
          {title}
        </div>
        <div className="rounded-2xl border border-red-800/40 bg-red-950/40 p-2 text-red-300">
          <Icon size={18} />
        </div>
      </div>

      <div className="text-3xl font-black text-white">{value}</div>

      {subtitle ? (
        <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
      ) : null}
    </div>
  );
}