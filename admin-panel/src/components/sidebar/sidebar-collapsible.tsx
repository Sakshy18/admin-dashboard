import { ChevronDown, ChevronRight } from "lucide-react";

export function SidebarCollapsible({
  icon,
  label,
  open,
  onToggle,
  items,
}: {
  icon?: React.ReactNode;
  label: string;
  open: boolean;
  onToggle: () => void;
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <div
        onClick={onToggle}
        className="
          h-7
          flex items-center gap-2
          px-2
          rounded-lg
          text-sm leading-5
          text-snow-black
        "
      >
        {open ? (
          <ChevronDown size={16} className="text-snow-black-66" />
        ) : (
          <ChevronRight size={16} className="text-snow-black-66" />
        )}

        {icon && (
          <span className="text-snow-black-66">
            {icon}
          </span>
        )}

        <span>{label}</span>
      </div>

      {open && (
        <div className="ml-6 flex flex-col gap-1">
          {items.map((item) => (
            <div
              key={item}
              className="
                h-7
                flex items-center
                text-sm leading-5
                text-snow-black
              "
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
