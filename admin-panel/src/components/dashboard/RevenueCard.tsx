import RevenueLineChart from "@/components/charts/RevenueLineChart";

export default function RevenueCard() {
  return (
    <div
      className="
        bg-[var(--chart-card-bg)]
        rounded-[16px]
        p-[24px]
        flex flex-col
        gap-[16px]
        h-[318px]
      "
    >
     <div className="flex flex-wrap items-center gap-[16px]">

  <span className="text-[14px] leading-[20px] font-semibold text-[var(--chart-text-primary)]">
    Revenue
  </span>

  <span className="text-[rgba(28,28,28,0.2)]">|</span>

  <div className="flex items-center gap-[8px]">
    <span className="h-[8px] w-[8px] rounded-full bg-[var(--chart-line-primary)]" />
    <span className="text-[12px] text-[var(--chart-text-primary)]">
      Current Week
    </span>
    <span className="text-[12px] font-medium text-[var(--chart-text-primary)]">
      $58,211
    </span>
  </div>

  <div className="flex items-center gap-[8px]">
    <span className="h-[8px] w-[8px] rounded-full bg-[var(--chart-line-secondary)]" />
    <span className="text-[12px] text-[var(--chart-text-primary)]">
      Previous Week
    </span>
    <span className="text-[12px] font-medium text-[var(--chart-text-primary)]">
      $68,768
    </span>
  </div>
</div>

      <RevenueLineChart />
    </div>
  );
}
