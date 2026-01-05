import WorldMap from "../dashboard/WorldMap";
import RevenueByLocation from "../dashboard/RevenueByLocation";

export default function SalesMapCard() {
  return (
    <div className="bg-[var(--chart-card-bg)] rounded-[16px] p-[24px] w-[202px] h-[318px] flex flex-col gap-[16px]">
      <h3 className="text-[14px] font-semibold text-[var(--chart-text-primary)]">
        Revenue by Location
      </h3>

      <WorldMap />

      <RevenueByLocation
        items={[
          { label: "New York", value: 72, max: 100 },
          { label: "San Francisco", value: 39, max: 100 },
          { label: "Sydney", value: 25, max: 100 },
          { label: "Singapore", value: 61, max: 100 },
        ]}
      />
    </div>
  );
}
