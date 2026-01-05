import StatsGrid from "./StatsGrid";
import ProjectionsCard from "./ProjectionCard";

export default function TopSection() {
  return (
    <div className="flex gap-[28px] w-full">
     
      <StatsGrid />
      <div className="flex-1 min-w-0">
        <ProjectionsCard />
      </div>
    </div>
  );
}
