type StatCardProps = {
  title: string;
  value: string;
  delta: string;
  variant?: "blue" | "gray" | "softBlue";
  trend?: "up" | "down";
};
const bgMap = {
  blue: "bg-[#E3F5FF]",
  softBlue: "bg-[#E5ECF6]",
  gray: "bg-[var(--chart-card-bg)]",
};

const textMap = {
  blue: "text-[#1C1C1C]",
  softBlue: "text-[#1C1C1C]",
  gray: "text-[var(--foreground)]",
};

export default function StatCard({
  title,
  value,
  delta,
  variant = "gray",
  trend = "up",
}: StatCardProps) {
  return (
    <div
      className={`
        flex flex-col items-start gap-[8px]
        p-[24px]
        w-[202px] min-w-[200px] h-[112px]
        rounded-[16px]
      ${bgMap[variant]}
        ${textMap[variant]}
      `}
    >
      {/* Title */}
      <div className="h-[20px] flex items-center">
        <span className="text-[14px] font-semibold leading-[20px] ">
          {title}
        </span>
      </div>

      <div className="w-full h-[36px] flex items-center justify-between">
        <span className="text-[24px] font-semibold leading-[36px]">
          {value}
        </span>

        <div className="flex items-center gap-[4px]">
          <span className="text-[12px] leading-[18px]">
            {delta}
          </span>

          <span className="w-[16px] h-[16px] flex items-center justify-center">
            {trend === "up" ? "↗" : "↘"}
          </span>
        </div>
      </div>
    </div>
  );
}
