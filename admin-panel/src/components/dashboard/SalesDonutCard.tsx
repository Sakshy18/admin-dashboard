import SalesDonutChart from "@/components/charts/SalesDonutChart";

export default function SalesDonutCard() {
  return (
    <div
      className="
       bg-[var(--chart-card-bg)]
        rounded-[16px]
        p-[24px]
        flex flex-col items-center
        gap-[16px]
        min-w-[200px] max-w-[272px] w-[202px]
        h-[344px]
        relative
      "
    >
      <div className="w-full text-[14px] font-semibold text-[var(--chart-text-primary)]">
        Total Sales
      </div>

      <div className="w-[120px] h-[120px] relative">
        <SalesDonutChart />
      </div>

      <Legend />
    </div>
  );
}
function Legend() {
  return (
    <div className="w-[154px] flex flex-col gap-[12px] ">
      <LegendRow color="#1C1C1C" label="Direct" value="$300.56" />
      <LegendRow color="#BAEDBD" label="Affiliate" value="$135.18" />
      <LegendRow color="#95A4FC" label="Sponsored" value="$154.02" />
      <LegendRow color="#B1E3FF" label="E-mail" value="$48.96" />
    </div>
  );
}

function LegendRow({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-[8px]">
        <span
          className="w-[8px] h-[8px] rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-[12px] text-[var(--chart-text-primary)]">
          {label}
        </span>
      </div>

      <span className="text-[12px] text-[var(--chart-text-primary)]">
        {value}
      </span>
    </div>
  );
}
