import { ChevronRight } from "lucide-react";

export function SidebarItem({
  icon,
  label,
  chevron,
  onClick,
}: {
  icon?: React.ReactNode;
  label: string;
  chevron?: boolean;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="
        h-7
        flex items-center gap-2
        px-2
        rounded-lg
        text-sm leading-5
        text-snow-black
      "
    >
{chevron && (
  <ChevronRight size={16} className="text-(--snow-black-20)" />
)}

{icon ? (
  <span className="text-(--snow-black-66)">
    {icon}
  </span>
) : (
  <span className="h-2 w-2 rounded-full bg-(--snow-black-10)" />
)}

<span className="flex-1">{label}</span>


    </div>
  );
}
