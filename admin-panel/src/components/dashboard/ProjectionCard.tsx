import ProjectionBarChart from "@/components/charts/ProjectionBarChart";

export default function ProjectionsCard() {
  return (
    <div className="bg-[#F7F9FB] rounded-[16px] p-[24px] h-[252px] flex flex-col">

      <div className="text-[14px] font-semibold text-[#1C1C1C] mb-[8px]">
        Projections vs Actuals
      </div>
      <div className="flex-1 min-h-0">
        <ProjectionBarChart />
      </div>
    </div>
  );
}
