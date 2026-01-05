import TopSellingProductsCard from "./TopSellingProductsCard";
import SalesDonutCard from "./SalesDonutCard";

export default function BottomRow() {
  return (
    <div className="grid grid-cols-12 gap-[24px]">
  <div className="col-span-9">
    <TopSellingProductsCard />
  </div>

    <div className="col-span-3">
        <SalesDonutCard />
      </div>
    </div>
  );
}
