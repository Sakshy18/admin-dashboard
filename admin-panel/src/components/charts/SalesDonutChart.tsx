type Slice = {
  value: number;
  color: string;
};

const SIZE = 120;
const STROKE = 14;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function SalesDonutChart() {
  const data: Slice[] = [
    { value: 300.56, color: "#1C1C1C" },   // Direct
    { value: 135.18, color: "#BAEDBD" },   // Affiliate
    { value: 154.02, color: "#95A4FC" },   // Sponsored
    { value: 48.96,  color: "#B1E3FF" },   // Email
  ];

  const total = data.reduce((s, d) => s + d.value, 0);

  let offset = 0;

  return (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className="block"
    >
      <g transform={`rotate(-90 ${SIZE / 2} ${SIZE / 2})`}>
        {data.map((slice, i) => {
          const length = (slice.value / total) * CIRCUMFERENCE;
          const dash = `${length} ${CIRCUMFERENCE - length}`;

          const el = (
            <circle
              key={i}
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={RADIUS}
              fill="none"
              stroke={slice.color}
              strokeWidth={STROKE}
              strokeDasharray={dash}
              strokeDashoffset={-offset}
              strokeLinecap="round"
            />
          );

          offset += length;
          return el;
        })}
      </g>
    </svg>
  );
}
