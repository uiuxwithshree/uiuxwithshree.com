import Image from "next/image";

interface AvatarProps {
  initials?: string;
  name: string;
  size?: number;
  className?: string;
}

export default function Avatar({
  initials,
  name,
  size = 168,
  className = "",
}: AvatarProps) {
  return initials ? (
    <div
      role="img"
      aria-label={`Portrait placeholder for ${name}`}
      className={`avatar-blob ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="font-display text-3xl font-medium tracking-tight text-ink">
        {initials}
      </span>
    </div>
  ) : (
    <Image
      src="/portrait.jpg"
      alt={name}
      width={size}
      height={size}
      className={`avatar-blob ${className}`}
    />
  );
}