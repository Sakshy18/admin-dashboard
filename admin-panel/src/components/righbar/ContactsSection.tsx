import ContactItem from "./ContactItem";
import Activity1 from "@/assets/svg/Activity1.svg";
import Activity2 from "@/assets/svg/Activity2.svg";
import Activity4 from "@/assets/svg/Activity4.svg";

import Activity15 from "@/assets/svg/Activity15.svg";
export default function ContactsSection() {
  return (
    <div className="flex flex-col gap-[8px]">
      <h3 className="text-[14px] font-semibold text-[#1C1C1C] px-[4px] py-[8px]">
        Contacts
      </h3>

      <ContactItem icon={Activity1} name="Natali Craig" />
      <ContactItem icon={Activity2} name="Drew Cano" />
      <ContactItem icon={Activity15} name="Orlando Diggs" />
      <ContactItem icon={Activity4} name="Andi Lane" />
      <ContactItem icon={Activity15} name="Kate Morrison" />
      <ContactItem icon={Activity2} name="Koray Okumus" />
    </div>
  );
}
