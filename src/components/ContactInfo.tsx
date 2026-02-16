import { Icon } from "@iconify/react";

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Icon icon="mdi:email" className="text-2xl text-red-500" />
        <span>contact@uetgamestudio.com</span>
      </div>
      <div className="flex items-center gap-3">
        <Icon icon="mdi:phone" className="text-2xl text-red-500" />
        <span>+92 123 456 7890</span>
      </div>
      <div className="flex items-center gap-3">
        <Icon icon="mdi:map-marker" className="text-2xl text-red-500" />
        <span>UET, Lahore, Pakistan</span>
      </div>
    </div>
  );
}
