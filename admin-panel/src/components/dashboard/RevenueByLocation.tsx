type Location = {
  label: string;
  value: number;
  max: number;
};

export default function RevenueByLocation({
  items,
}: {
  items: Location[];
}) {
  return (
    <div className="flex flex-col gap-[16px]">
      {items.map((item) => {
        const percent = (item.value / item.max) * 100;

        return (
          <div key={item.label} className="flex flex-col gap-[6px]">
            <div className="flex justify-between text-[12px] text-[var(--chart-text-primary)]">
              <span>{item.label}</span>
              <span>{item.value}K</span>
            </div>

            <div className="h-[4px] rounded-full bg-[#E3EAF1] overflow-hidden">
              <div
                className="h-full rounded-full bg-[var(--chart-line-secondary)] transition-[width] duration-500 ease-out"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
