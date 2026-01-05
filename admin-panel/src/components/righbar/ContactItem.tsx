interface ContactItemProps {
    icon:string;
  name: string;
}

export default function ContactItem({ icon,name }: ContactItemProps) {
  return (
    <div className="flex items-center gap-[8px] p-[4px]">

     <img
      src={icon}
      alt=""
      className="w-[24px] h-[24px]"
    />

      <span className="text-[14px] text-[var(--foreground)] leading-[20px]">
        {name}
      </span>
    </div>
  );
}
