import ProjectionBarChart from "@/components/charts/ProjectionBarChart";

export default function ProjectionsCard() {
  return (
    <div className="bg-[var(--chart-card-bg)] rounded-[16px] p-[24px] h-[252px] flex flex-col">

      <div className="text-[14px] font-semibold text-[var(--chart-text-primary)] mb-[8px]">
        Projections vs Actuals
      </div>
      <div className="flex-1 min-h-0">
        <ProjectionBarChart />
      </div>
    </div>
  );
}
