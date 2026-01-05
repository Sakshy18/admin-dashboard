import NotificationsSection from "./NotificationsSection";
import ActivitiesSection from "./ActivitiesSection";
import ContactsSection from "./ContactsSection";

export default function RightBar() {
  return (
    <aside
      className="
        w-[280px]
        h-screen
        shrink-0
        border-l border-[rgba(28,28,28,0.1)]
        p-[20px]
        flex flex-col
        gap-[24px]
        bg-white
      "
    >
      <NotificationsSection />
      <ActivitiesSection />
      <ContactsSection />
    </aside>
  );
}
