import type { OrderStatus } from "../ orders.types";
import { STATUS_COLORS, STATUS_LABELS} from "../orders.constants";

export function OrderStatusPill({
  status,
}: {
  status: OrderStatus;
}) {
  const { dot, text } = STATUS_COLORS[status];

  return (
    <div className="flex items-center gap-2 h-[20px] py-[1px]">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: dot }}
      />
      <span
        className="text-[12px] leading-[18px]"
        style={{ color: text }}
      >
        {STATUS_LABELS[status]}
      </span>
    </div>
  );
}
