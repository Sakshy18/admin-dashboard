import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useEffect, useRef } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  PanelLeft,
  Star,
  Search,
  Sun,
  Clock,
  Bell,
  PanelRight,
} from "lucide-react";

type HeaderProps = {
  onToggleRightBar: () => void;
};

export default function Header({ onToggleRightBar }: HeaderProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const modifier = isMac ? e.metaKey : e.ctrlKey;

      if (modifier && e.key === "/") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return (
    <div className="flex h-full items-center justify-between">
   
      <div className="flex items-center">
      
        <div className="flex items-center gap-2 h-7">
          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg">
            <PanelLeft className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg">
            <Star className="h-4 w-4" />
          </Button>
        </div>

 
        <div className="ml-5">
          <Breadcrumb>
            <BreadcrumbList className="h-7 gap-2 text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink className="text-snow-black-66">
                  Dashboards
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator className="text-snow-black-20" />

              <BreadcrumbItem>
                <span className="font-medium text-foreground">Default</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center">
        {/* Search */}
      <div
  className="
    relative
    flex items-center gap-2
    w-[160px] h-7
    rounded-lg
    bg-[rgba(28,28,28,0.05)]
    px-2
  "
>

  <div className="flex items-center gap-2 flex-1 min-w-0">
    <Search className="h-4 w-4 text-[rgba(28,28,28,0.2)]" />

    <Input
      ref={searchRef}
      placeholder="Search"
      className="
        h-full
        bg-transparent
        border-none
        p-0
        text-sm
        text-foreground
        placeholder:text-[rgba(28,28,28,0.2)]
        focus-visible:ring-0
        focus-visible:ring-offset-0
      "
    />
  </div>

  <kbd
    aria-hidden
    className="
      text-[14px]
      text-[rgba(28,28,28,0.2)]
      font-normal
      bg-transparent
      pointer-events-none
    "
  >
    ⌘/
  </kbd>
</div>

        <div className="ml-5 flex items-center gap-2 h-7">
          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg">
            <Sun className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg">
            <Clock className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" className="h-7 w-7 rounded-lg">
            <Bell className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 rounded-lg"
            onClick={onToggleRightBar}
            aria-label="Toggle right panel"
          >
            <PanelRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
