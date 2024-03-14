export default function HorizontalLine() {
  return (
    <svg width="100%" height="1" className="stroke-current text-gray_EEEEEE">
      <line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
