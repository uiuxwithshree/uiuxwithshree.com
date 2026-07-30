import Mark from "./Mark";

interface HighlightedProps {
  text: string;
  highlight: string;
}

export default function Highlighted({ text, highlight }: HighlightedProps) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;
  const idx = text.indexOf(highlight);
  const before = text.slice(0, idx);
  const after = text.slice(idx + highlight.length);
  return (
    <>
      {before}
      <Mark>{highlight}</Mark>
      {after}
    </>
  );
}
