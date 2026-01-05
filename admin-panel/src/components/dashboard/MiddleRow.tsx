
import SalesMapCard from "../charts/SalesMapChart";
import RevenueCard from "./RevenueCard";
export default function MiddleRow() {
  return (
   <div className="grid grid-cols-12 gap-[24px]">
  <div className="col-span-9">
    <RevenueCard />
  </div>

      {/* Map — fixed width like Figma */}
    <div className="col-span-3">
        <SalesMapCard/>
        {/* <RevenueByLocationCard /> */}
      </div>
    </div>
  );
}
