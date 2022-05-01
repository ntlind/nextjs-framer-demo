import { openPopupWidget } from "react-calendly";

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
    <a onClick={onClick} target="_blank" underline="none">
      <span className={class_style}>{text}</span>
    </a>
  );
}
