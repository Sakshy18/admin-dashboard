import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Folder,
  BookOpen,
  User,
  Users,
  FileText,
  MessageCircle,
} from "lucide-react";

import { SidebarItem } from "./sidebar-item";
import { SidebarSection } from "./sidebar-section";
import { SidebarCollapsible } from "./sidebar-collapsible";
import profileImg from "../../assets/svg/ByeWind.svg";

export default function Sidebar() {
  const [active, setActive] = useState("Default");
  const [open, setOpen] = useState(true);

  return (
    <aside
      className="
        h-full w-sidebar
       border-r border-r-(--snow-black-10)
        px-4 pt-5 pb-3
        flex flex-col gap-4
       bg-[var(--background)] text-[var(--foreground)]
      "
    >


  <div className="flex items-center justify-between px-1">
  <div className="flex items-center gap-2">
    <img
  src={profileImg}
  alt="User avatar"
  className="h-6 w-6 rounded-full object-cover"
/>

    <span className="text-sm font-medium text-(--snow-black-100)">
      ByeWind
    </span>
  </div>
</div>
<SidebarSection
  title="Favorites"
  rightSlot={
    <span className="text-[14px] leading-5 text-(--snow-black-20)">
      Recently
    </span>
  }
>
  <SidebarItem label="Overview" />
  <SidebarItem label="Projects" />
</SidebarSection>


      <SidebarSection title="Dashboards">
        <SidebarItem
          icon={<LayoutDashboard size={16} />}
          label="Default"
          active={active === "Default"}
          onClick={() => setActive("Default")}
        />
        <SidebarItem icon={<ShoppingBag size={16} />} label="eCommerce" chevron />
        <SidebarItem icon={<Folder size={16} />} label="Projects" chevron />
        <SidebarItem icon={<BookOpen size={16} />} label="Online Courses" chevron />
      </SidebarSection>

      <SidebarSection title="Pages">
        <SidebarCollapsible
          icon={<User size={16} />}
          label="User Profile"
          open={open}
          onToggle={() => setOpen(!open)}
          items={[
            "Overview",
            "Projects",
            "Campaigns",
            "Documents",
            "Followers",
          ]}
        />
        <SidebarItem icon={<Users size={16} />} label="Account" chevron />
        <SidebarItem icon={<Users size={16} />} label="Corporate" chevron />
        <SidebarItem icon={<FileText size={16} />} label="Blog" chevron />
        <SidebarItem icon={<MessageCircle size={16} />} label="Social" chevron />
      </SidebarSection>
    </aside>
  );
}
