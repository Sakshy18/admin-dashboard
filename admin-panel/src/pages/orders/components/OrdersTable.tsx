import { Calendar } from "lucide-react";
import type { Order } from "../ orders.types";
import { GRID_TEMPLATE_COLUMNS } from "../orders.column";
import { OrderStatusPill } from "./OrderStatusPill";

import type { SortState } from "../hooks/useOrders";
import OrdersHeaderRow from "./OrdersHeader";
type Props = {
  orders: Order[];
  sort: SortState;
  onSort: (key: any) => void;
  selected: Set<string>;
  toggleOne: (id: string) => void;
  toggleAll: () => void;
};

export function OrdersTable({
  orders,
  sort,
  onSort,
  selected,
  toggleOne,
  toggleAll,
}: Props) {
  const allSelected = orders.length > 0 && selected.size === orders.length;
  const indeterminate =
    selected.size > 0 && selected.size < orders.length;

  return (
    <div className="flex flex-col">
      <OrdersHeaderRow
        sort={sort}
        onSort={onSort}
        allSelected={allSelected}
        indeterminate={indeterminate}
        onToggleAll={toggleAll}
      />

      {orders.map((order) => {
        const checked = selected.has(order.id);

        return (
          <div
            key={order.id}
            className="grid items-center border-b border-[rgba(28,28,28,0.05)] hover:bg-[#F7F9FB]"
            style={{
              gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
              height: 40,
            }}
          >
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleOne(order.id)}
                className="
    relative
    h-[16px] w-[16px]
    rounded-[4px]
    border border-[rgba(28,28,28,0.2)]
    bg-white
    appearance-none
    cursor-pointer

    checked:bg-[#1C1C1C]
    checked:border-[#1C1C1C]

    indeterminate:bg-[#1C1C1C]
    indeterminate:border-[#1C1C1C]

    after:absolute
    after:inset-0
    after:flex
    after:items-center
    after:justify-center
    after:text-white
    after:text-[12px]

    checked:after:content-['✓']
    indeterminate:after:content-['−']

    hover:bg-[rgba(28,28,28,0.05)]
    focus:outline-none
  "
              />
            </div>

            <Cell>{order.orderId}</Cell>
            <Cell className="flex items-center gap-2">
              <img
                src={order.avatar}
                className="h-6 w-6 rounded-full"
              />
              {order.user}
            </Cell>
           <Cell>
  <span className="truncate">
    {order.project}
  </span>
</Cell>

            <Cell>{order.address}</Cell>
          <Cell className="gap-2 text-[rgba(28,28,28,0.6)]">
  <Calendar size={14} />
  {order.date}
</Cell>
         <Cell>
  <OrderStatusPill status={order.status} />
</Cell>


            <div className="flex items-center justify-center">⋮</div>
          </div>
        );
      })}
    </div>
  );
}

function Cell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`px-[12px] text-[12px] text-[#1C1C1C] flex items-center ${className}`}
    >
      {children}
    </div>
  );
}