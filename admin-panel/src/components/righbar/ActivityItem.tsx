interface ActivityItemProps {
    icon:string
  text: string;
  time: string;
}

export default function ActivityItem({icon, text, time }: ActivityItemProps) {
  return (
    <div className="flex gap-[8px] p-[4px]">

      <img
      src={icon}
      alt=""
      className="w-[24px] h-[24px]"
    />

      <div className="flex flex-col">
        <span className="text-[14px] text-[#1C1C1C] leading-[20px]">
          {text}
        </span>
        <span className="text-[12px] text-[rgba(28,28,28,0.4)] leading-[18px]">
          {time}
        </span>
      </div>
    </div>
  );
}
