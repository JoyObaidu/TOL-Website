export default function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center cursor-pointer rounded-2xl font-medium transition-colors duration-200";

  // Variants (styles)
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-blue-600 hover:bg-gray-300",
    outline:
      "border border-blue-400 text-blue-600 hover:bg-blue-100 bg-transparent",
  };

  // Sizes
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
