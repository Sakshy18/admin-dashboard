export type SidebarItem = {
  label: string;
  icon?: React.ReactNode;
  href?: string;
};

export type SidebarSection = {
  title?: string;
  items: SidebarItem[];
};
