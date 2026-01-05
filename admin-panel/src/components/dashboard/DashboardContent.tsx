
import MiddleRow from "./MiddleRow";
import BottomRow from "./BottomRow";
import TopSection from "./TopSection";
export default function DashboardContent() {
  return (
    <section className="space-y-[28px]">

      <TopSection />
      <MiddleRow />
      <BottomRow />
    </section>
  );
}
