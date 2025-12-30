export default function Header() {
  return (
    <div className="h-full flex items-center justify-between px-6">
{/* need to use shadcn component for breadcrumbs */}
      <div className="flex items-center gap-2 text-sm">
        <span className="text-snow-black-66">Dashboards</span>
        <span className="text-snow-black-66">/</span>
        <span className="font-medium">Default</span>
      </div>

    
      <div className="flex items-center gap-4">
       {/* more actions and imports from figma here */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="
              h-9 w-48 rounded-md border border-snow-black-33
              bg-transparent px-3 text-sm
              focus:outline-none focus:ring-1 focus:ring-snow-cyan
            "
          />
        </div>

        {/* similar icons from figma to be imported here*/}
        <button className="h-9 w-9 rounded-md hover:bg-snow-purple transition" />
        <button className="h-9 w-9 rounded-md hover:bg-snow-purple transition" />
        <button className="h-9 w-9 rounded-md hover:bg-snow-purple transition" />
      </div>
    </div>
  );
}
