interface MarkProps {
  children: React.ReactNode;
}

export default function Mark({ children }: MarkProps) {
  return <span className="mark">{children}</span>;
}
