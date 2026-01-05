import { Plus, Funnel, ArrowUpDown, Search } from "lucide-react";

type Props = {
  search: string;
  onSearch: (value: string) => void;
  onAdd?: () => void;
  onFilter?: () => void;
  onSort?: () => void;
};

export function OrdersToolbar({
  search,
  onSearch,
  onAdd,
  onFilter,
  onSort,
}: Props) {
  return (
    <div className="flex items-center justify-between h-[44px] p-[8px] gap-[16px] bg-[var(--chart-text-toolbox)] rounded-[8px]">
 
      <div className="flex items-center gap-[8px]">
        <IconButton onClick={onAdd}>
          <Plus size={20} />
        </IconButton>

        <IconButton onClick={onFilter}>
          <Funnel size={20} />
        </IconButton>

        <IconButton onClick={onSort}>
          <ArrowUpDown size={20} />
        </IconButton>
      </div>


      <div className="flex items-center w-[160px] h-[28px] px-[8px] py-[4px] gap-[8px] bg-[rgba(255,255,255,0.4)] border border-[rgba(28,28,28,0.1)] rounded-[8px]">
        <Search
          size={16}
          className="text-[rgba(28,28,28,0.2)]"
        />
        <input
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search"
          className="w-full bg-transparent outline-none text-[14px] text-[#1C1C1C] placeholder:text-[rgba(28,28,28,0.2)]"
        />
      </div>
    </div>
  );
}

function IconButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        h-[28px] w-[28px]
        flex items-center justify-center
        rounded-[8px]
        text-[var(--snow-black-100)]
        hover:bg-[rgba(28,28,28,0.05)]
      "
    >
      {children}
    </button>
  );
}
