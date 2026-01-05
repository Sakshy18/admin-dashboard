import { columns, GRID_TEMPLATE_COLUMNS, type SortKey } from "../orders.column";
import type { SortState } from "../hooks/useOrders";

type Props = {
  sort: SortState;
  onSort: (key: SortKey) => void;
  allSelected: boolean;
  indeterminate: boolean;
  onToggleAll: () => void;
};

export default function OrdersHeaderRow({
  sort,
  onSort,
  allSelected,
  indeterminate,
  onToggleAll,
}: Props) {
  return (
    <div
      className="grid items-center border-b border-[rgba(28,28,28,0.2)]"
      style={{
        gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
        height: 40,
      }}
    >

      <div className="flex items-center justify-center">
        <input
          type="checkbox"
          checked={allSelected}
          ref={(el) => {
            if (el) el.indeterminate = indeterminate;
          }}
          onChange={onToggleAll}
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

    focus:outline-none
  "
        />
      </div>

      {columns.slice(1, -1).map((col) => {
        if (!col.label) return null;

        const active = sort.key === col.sortKey;

        return (
          <button
            key={col.key}
            onClick={() => col.sortKey && onSort(col.sortKey)}
            className="flex items-center gap-1 px-[12px] text-left text-[12px] text-[rgba(28,28,28,0.4)] hover:text-[#1C1C1C]"
          >
            {col.label}
            {col.sortable && (
              <span className="text-[10px] opacity-60">
                {active
                  ? sort.direction === "asc"
                    ? "↑"
                    : "↓"
                  : "↕"}
              </span>
            )}
          </button>
        );
      })}

      <div />
    </div>
  );
}
