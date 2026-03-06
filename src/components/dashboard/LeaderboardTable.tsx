type Column = {
  key: string;
  label: string;
};

type LeaderboardTableProps = {
  title: string;
  columns: Column[];
  rows: Record<string, string | number>[];
  mobilePrimaryKey?: string;
  mobileSecondaryKeys?: string[];
};

export default function LeaderboardTable({
  title,
  columns,
  rows,
  mobilePrimaryKey = "name",
  mobileSecondaryKeys = [],
}: LeaderboardTableProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-red-900/40 bg-black/75 shadow-[0_0_40px_rgba(127,29,29,0.22)] backdrop-blur-md">
      <div className="border-b border-red-900/40 bg-gradient-to-r from-red-950 via-black to-red-950 px-5 py-5 sm:px-6">
        <h2 className="text-xl font-black tracking-wide text-white sm:text-2xl">
          {title}
        </h2>
      </div>

      {/* Mobile card layout */}
      <div className="block space-y-4 p-4 md:hidden">
        {rows.map((row, index) => {
          const primaryValue = row[mobilePrimaryKey];

          return (
            <div
              key={index}
              className="rounded-3xl border border-red-900/30 bg-gradient-to-br from-black via-red-950/20 to-black p-4 shadow-[0_0_20px_rgba(127,29,29,0.18)]"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                    {row.rank}
                  </div>
                  <div className="mt-1 text-xl font-black text-white">
                    {primaryValue}
                  </div>
                </div>

                {"winRate" in row ? (
                  <div className="rounded-full border border-red-800/40 bg-red-950/40 px-3 py-1 text-xs font-bold text-red-200">
                    {row.winRate}
                  </div>
                ) : null}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {columns
                  .filter(
                    (column) =>
                      column.key !== "rank" && column.key !== mobilePrimaryKey
                  )
                  .map((column) => {
                    const value = row[column.key];
                    const isDiff =
                      column.key === "pointDiff" || column.key === "diff";
                    const isNegative =
                      typeof value === "string" && value.startsWith("-");

                    return (
                      <div
                        key={column.key}
                        className="rounded-2xl border border-white/5 bg-white/5 p-3"
                      >
                        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          {column.label}
                        </div>
                        <div
                          className={`mt-1 text-base font-bold ${
                            isDiff
                              ? isNegative
                                ? "text-red-400"
                                : "text-green-400"
                              : "text-white"
                          }`}
                        >
                          {value}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop table layout */}
      <div className="hidden md:block">
        <table className="w-full table-fixed">
          <thead className="bg-red-950/35">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-red-200 lg:px-5"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-t border-white/5 transition hover:bg-red-950/15"
              >
                {columns.map((column) => {
                  const value = row[column.key];
                  const isRank = column.key === "rank";
                  const isDiff =
                    column.key === "pointDiff" || column.key === "diff";
                  const isNegative =
                    typeof value === "string" && value.startsWith("-");

                  return (
                    <td
                      key={column.key}
                      className={`px-4 py-5 text-sm lg:px-5 lg:text-base ${
                        isRank
                          ? "font-black text-red-300"
                          : isDiff
                          ? isNegative
                            ? "font-bold text-red-400"
                            : "font-bold text-green-400"
                          : "text-slate-200"
                      }`}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}