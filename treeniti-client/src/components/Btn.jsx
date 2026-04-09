import "./Btn.css";

export default function Btn({ children, onClick, type = "primary", disabled, full }) {
  return (
    <button
      className={`cbtn cbtn-${type} ${full ? "cbtn-full" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}