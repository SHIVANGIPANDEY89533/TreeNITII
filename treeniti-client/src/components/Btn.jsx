export default function Btn({
  children, onClick,
  variant = "primary",
  full = false,
  disabled = false,
  style: extraStyle = {},
}) {
  const variants = {
    primary:   { background: "#16a34a", color: "#fff" },
    secondary: { background: "#f3f4f6", color: "#374151" },
    danger:    { background: "#fee2e2", color: "#dc2626" },
    outline:   { background: "transparent", border: "1.5px solid #16a34a", color: "#16a34a" },
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        border: "none",
        borderRadius: 999,
        padding: "12px 24px",
        fontSize: 15,
        fontWeight: 700,
        cursor: disabled ? "not-allowed" : "pointer",
        width: full ? "100%" : "auto",
        opacity: disabled ? 0.55 : 1,
        transition: "background 0.18s",
        ...variants[variant],
        ...extraStyle,
      }}
    >
      {children}
    </button>
  );
}