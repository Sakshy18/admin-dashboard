import Activity1 from "@/assets/svg/Activity1.svg";
import Activity2 from "@/assets/svg/Activity2.svg";
import Activity3 from "@/assets/svg/Activity3.svg";

import Activity4 from "@/assets/svg/Activity4.svg";

import NotificationItem from "./NotificationItem";

export default function NotificationsSection() {
  return (
    <div className="flex flex-col gap-[8px]">
      <h3 className="text-[14px] font-semibold text-[var(--foreground)] px-[4px] py-[8px]">
        Notifications
      </h3>

      <NotificationItem
      icon={Activity1}
        text="You have a bug that needs..."
        time="Just now"
      />
      <NotificationItem
        icon={Activity2}
        text="New user registered"
        time="59 minutes ago"
      />
      <NotificationItem
        icon={Activity3}
        text="You have a bug that needs..."
        time="12 hours ago"
      />
      <NotificationItem
        icon={Activity4}
        text="Andi Lane subscribed to you"
        time="Today, 11:59 AM"
      />
    </div>
  );
}
