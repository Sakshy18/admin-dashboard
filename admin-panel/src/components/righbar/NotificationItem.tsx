interface NotificationItemProps {
     icon: string; 
  text: string;
  time: string;
}

export default function NotificationItem({
    icon,
  text,
  time,
}: NotificationItemProps) {
  return (
    <div className="flex gap-[8px] p-[4px] rounded-[8px]">

    <img
      src={icon}
      alt=""
      className="w-[24px] h-[24px]"
    />
      <div className="flex flex-col">
        <span className="text-[14px] text-[var(--foreground)] leading-[20px]">
          {text}
        </span>
        <span className="text-[12px] text-[var(--chart-text-muted)] leading-[18px]">
          {time}
        </span>
      </div>
    </div>
  );
}
