import Activity1 from "@/assets/svg/Activity1.svg";
import Activity2 from "@/assets/svg/Activity2.svg";
import Activity3 from "@/assets/svg/Activity3.svg";

import Activity4 from "@/assets/svg/Activity4.svg";

import Activity15 from "@/assets/svg/Activity15.svg";
import ActivityItem from "./ActivityItem";

export default function ActivitiesSection() {
  return (
    <div className="flex flex-col gap-[8px]">
      <h3 className="text-[14px] font-semibold text-[#1C1C1C] px-[4px] py-[8px]">
        Activities
      </h3>

      <ActivityItem   icon={Activity1} text="You have a bug that needs..." time="Just now" />
      <ActivityItem icon={Activity2} text="Released a new version" time="59 minutes ago" />
      <ActivityItem icon={Activity3} text="Submitted a bug" time="12 hours ago" />
      <ActivityItem icon={Activity4} text="Modified a data in Page X" time="Today, 11:59 AM" />
      <ActivityItem icon={Activity15} text="Deleted a page in Project X" time="Feb 2, 2023" />
    </div>
  );
}
