export function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
<div className="flex flex-col space-y-1 pb-3 text-[14px] leading-5">

      <span className="text-sm leading-5 text-snow-black-66">
        {title}
      </span>
      {children}
    </div>
  );
}
