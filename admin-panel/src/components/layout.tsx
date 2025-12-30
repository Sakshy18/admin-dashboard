import Sidebar from "./sidebar/sidebar";
import Header from "./header";
import RightBar from "./right-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="snow-bg min-h-screen w-full flex text-foreground">
      {/* Left Sidebar */}
      <aside className="w-sidebar shrink-0 border-r border-snow-black-33">
        <Sidebar />
      </aside>

      {/* Infographics */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Header */}
        <header className="h-header border-b border-snow-black-33">
          <Header />
        </header>

        {/* Content + Right Bar */}
        <div className="flex flex-1 min-h-0">
          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>

          {/* Right Bar */}
          <aside className="w-rightbar shrink-0 border-l border-snow-black-33">
            <RightBar />
          </aside>
        </div>
      </div>
    </div>
  );
}
