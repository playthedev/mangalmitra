export function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-saffron-100 via-gold-100 to-sandalwood-200 text-sandalwood-600 text-sm font-medium text-center p-4 ${className}`}
    >
      {label}
    </div>
  );
}
