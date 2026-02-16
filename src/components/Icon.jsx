import { Icon as IconifyIcon } from "@iconify/react";

export default function Icon({ icon, className, ...props }) {
  return <IconifyIcon icon={icon} className={className} {...props} />;
}
