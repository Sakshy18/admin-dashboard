export function SidebarSection({
  title,
  rightSlot,
  children,
}: {
  title: string;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 pb-3">
      <div className="flex items-center justify-between h-7 px-1">
        <span className="text-[14px] leading-5 text-(--snow-black-40)">
          {title}
        </span>

        {rightSlot}
      </div>

      {children}
    </div>
  );
}
