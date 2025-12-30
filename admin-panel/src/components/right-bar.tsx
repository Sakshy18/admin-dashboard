const notifications = [
  { text: "You have a bug that needs fixing", time: "Just now" },
  { text: "New user registered", time: "59 minutes ago" },
  { text: "Released a new version", time: "Today, 11:59 AM" },
];

export default function RightBar() {
  return (
    <div className="h-full flex flex-col p-4 overflow-y-auto">
      <h3 className="text-sm font-semibold mb-4">Notifications</h3>

      <ul className="space-y-4">
        {notifications.map((item, i) => (
          <li
            key={i}
            className="text-sm border-b border-snow-black-33 pb-3"
          >
            <p>{item.text}</p>
            <span className="text-xs text-snow-black-66">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
