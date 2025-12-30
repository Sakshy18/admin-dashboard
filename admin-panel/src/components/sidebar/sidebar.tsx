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

export default function Sidebar() {
  const [active, setActive] = useState("Default");
  const [open, setOpen] = useState(true);

  return (
    <aside
  className="
    h-full w-sidebar
    border-r border-snow-black-33
    px-4 pt-5 pb-3
    flex flex-col gap-3
  "
>

      
      <div className="flex items-center gap-3 px-1">
        <div className="h-8 w-8 rounded-full bg-snow-blue" />
        <span className="text-sm font-medium">ByeWind</span>
      </div>

      <SidebarSection title="Favorites">
        <SidebarItem label="Overview" />
        <SidebarItem label="Projects" />
      </SidebarSection>

      <SidebarSection title="Dashboards">
        <SidebarItem
          icon={<LayoutDashboard size={18} />}
          label="Default"
          active={active === "Default"}
          onClick={() => setActive("Default")}
        />
        <SidebarItem icon={<ShoppingBag size={18} />} label="eCommerce" chevron />
        <SidebarItem icon={<Folder size={18} />} label="Projects" chevron />
        <SidebarItem icon={<BookOpen size={18} />} label="Online Courses" chevron />
      </SidebarSection>

      <SidebarSection title="Pages">
        <SidebarCollapsible
          icon={<User size={18} />}
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
        <SidebarItem icon={<Users size={18} />} label="Account" chevron />
        <SidebarItem icon={<Users size={18} />} label="Corporate" chevron />
        <SidebarItem icon={<FileText size={18} />} label="Blog" chevron />
        <SidebarItem icon={<MessageCircle size={18} />} label="Social" chevron />
      </SidebarSection>
    </aside>
  );
}
