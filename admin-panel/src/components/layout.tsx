import { useState } from "react";
import Sidebar from "./sidebar/sidebar";
import Header from "./header";
import RightBar from "./right-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isRightBarOpen, setIsRightBarOpen] = useState(false);

  return (
    <div className="snow-bg min-h-screen w-full flex text-foreground">
   
      <aside className="w-sidebar shrink-0">
        <Sidebar />
      </aside>
      <div className="flex flex-1 min-w-0">
        {/* Center Column */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Header */}
          <header className="border-b border-b-(--snow-black-10)">
            <div className="h-[68px] px-[28px] py-[20px]">
              <Header onToggleRightBar={() => setIsRightBarOpen(v => !v)} />
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>

       <aside
  className={`
    shrink-0 border-l border-l-(--snow-black-10)
    transition-[width] duration-300 ease-in-out
    ${isRightBarOpen ? "w-rightbar" : "w-0"}
  `}
>
  <div
    className={`
      h-full overflow-hidden
      transition-opacity duration-200
      ${isRightBarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
    `}
  >
    <RightBar />
  </div>
</aside>

      </div>
    </div>
  );
}
