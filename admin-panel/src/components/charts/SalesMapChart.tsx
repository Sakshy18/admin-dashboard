import WorldMap from "../dashboard/WorldMap";

export default function SalesMapCard() {
  return (
    <div className="bg-[#F7F9FB] rounded-[16px] p-[24px] w-[202px] h-[318px] flex flex-col gap-[16px]">
      <h3 className="text-[14px] font-semibold text-[#1C1C1C]">
        Revenue by Location
      </h3>

      <WorldMap />
    </div>
  );
}
