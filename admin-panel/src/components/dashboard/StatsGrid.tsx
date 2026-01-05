import StatCard from "./StatCard";
import { Link } from "react-router-dom";

export default function StatsGrid() {
  return (
    <div className="flex flex-wrap gap-[28px] w-[432px]">
      <StatCard
        title="Customers"
        value="3,781"
        delta="+11.01%"
        variant="blue"
      />

      {/* Orders → navigates to Orders page */}
      <Link to="/orders" className="block">
        <StatCard
          title="Orders"
          value="1,219"
          delta="-0.03%"
          trend="down"
        />
      </Link>

      <StatCard
        title="Revenue"
        value="$695"
        delta="+15.03%"
      />

      <StatCard
        title="Growth"
        value="30.1%"
        delta="+6.08%"
        variant="softBlue"
      />
    </div>
  );
}
