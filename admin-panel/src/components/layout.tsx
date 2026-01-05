import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import Header from "./header";
import RightBar from "./righbar/RightBar.tsx";

import { useTheme } from "../hooks/use-theme";
export default function Layout() {
  const [isRightBarOpen, setIsRightBarOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  return (
    <div className="bg-[var(--background)] min-h-screen w-full flex text-[var(--foreground)]">

      {/* Sidebar */}
      <aside className="w-sidebar shrink-0">
        <Sidebar />
      </aside>

      <div className="flex flex-1 min-w-0">
        {/* Center column */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Header */}
          <header className="border-b border-b-(--snow-black-10)">
            <div className="h-[68px] px-[28px] py-[20px]">
              <Header onToggleRightBar={() => setIsRightBarOpen(v => !v)}
        onToggleTheme={toggleTheme}  theme={theme}/>
            </div>
          </header>

     
          <main className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </main>
        </div>


<aside
  className={`
    shrink-0 overflow-hidden
    border-l border-[var(--snow-black-10)]
    transition-[max-width] duration-300 ease-in-out
    ${isRightBarOpen
      ? "max-w-[var(--rightbar-width)]"
      : "max-w-0"}
  `}
>

  <div
    className={`
      h-full
      transition-all duration-300 ease-in-out
      ${isRightBarOpen
        ? "opacity-100 translate-x-0"
        : "opacity-0 translate-x-4 pointer-events-none"}
    `}
  >
    <RightBar />
  </div>
</aside>


      </div>
    </div>
  );
}
