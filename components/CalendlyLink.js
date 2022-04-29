import { openPopupWidget } from "react-calendly";
import Link from "@material-ui/core/Link";

export default function CalendlyLink({
  url,
  prefill,
  pageSettings,
  utm,
  text,
  class_style,
}) {
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });

  return (
    <Link onClick={onClick} target="_blank" underline="none">
      <span className={class_style}>{text}</span>
    </Link>
  );
}
