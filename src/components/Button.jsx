export default function Button({ children, href, variant = "primary" }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition"

  const variants = {
  primary: "bg-rose-600 text-white hover:bg-rose-700",
  secondary: "text-zinc-900 hover:text-rose-600",
  light: "bg-white text-rose-700 hover:bg-rose-50",
}

  return (
    <a href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </a>
  )
}